// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.17;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error InvalidToken();

contract DaoStaking is Ownable, ReentrancyGuard {
    IERC20 public immutable stakingAdsToken;
    IERC20 public immutable stakingMeToken;
    IERC20 public immutable rewardsAdsToken;
    IERC20 public immutable rewardsMeToken;
    
    constructor(address _stakingAdsToken, address _stakingMeToken, address _rewardsAdsToken, address _rewardsMeToken) {
        stakingAdsToken = IERC20(_stakingAdsToken);
        stakingMeToken = IERC20(_stakingMeToken);
        rewardsAdsToken = IERC20(_rewardsAdsToken);
        rewardsMeToken = IERC20(_rewardsMeToken);
    }

    struct RewardType {
        address stakeToken;
        address rewardToken;
        uint256 rewardDuration;
        uint256 rewardAmount;
        uint256 stakeAmount;
    }
    RewardType[] public rewardsTypes;

    struct StakerReward {
        uint256 id;
        address staker;
        uint256 stakeAmount;
        uint256 rewardType;
        uint256 stakeTime;
        uint256 claimRewardTime;
        uint256 rewardAmount;
        bool claimed;
    }
    StakerReward[] public stakerRewards;

    struct WithdrawFee {
        uint256 duration;
        uint256 withdrawFeeAmount;
    }
    WithdrawFee[] public withdawFees;

    struct Content {
        uint256 id;
        address creator;
        bool contentType; // true: Advertiser, false: Publisher
        uint256 createdAt;
        uint256 endAt;
        uint256 agreeVoteAmount;
        uint256 rejectVoteAmount;
        string siteUrl;
    }
    Content[] public contents;

    event StakeEvent(uint256 id, address staker, uint256 stakeAmount, uint256 rewardType, uint256 stakeTime, bool claimed);
    event WithdrawEvent(address withdrawer, uint256 withdrawAmount, uint256 id);
    event CreateContentEvent(address creator, uint256 id, uint256 createdAt, uint256 endAt, uint256 agreeVoteAmount, uint256 rejectVoteAmount, string siteUrl, bool contentType);
    event VoteEvent(uint256 id, uint256 agreeVoteAmount, uint256 rejectVoteAmount);

    modifier checkTokenAddress(address _stakeToken, address _rewardToken) {
        require(_stakeToken == address(stakingAdsToken) || _stakeToken == address(stakingMeToken), "Invalid Staking Token Address");
        require(_rewardToken == address(rewardsAdsToken) || _rewardToken == address(rewardsMeToken), "Invalid Reward Token Address");
        _;
    }

    modifier checkZeroAddress() {
        require(msg.sender != address(0), "Invalid Wallet Address");
        _;
    }

    function addRewardType(address _stakeToken, address _rewardToken, uint256 _rewardDuration, uint256 _rewardAmount, uint256 _stakeAmount) external onlyOwner checkTokenAddress(_stakeToken, _rewardToken){
        RewardType memory rewardType;
        rewardType.stakeToken = _stakeToken;
        rewardType.rewardToken = _rewardToken;
        rewardType.rewardDuration = _rewardDuration;
        rewardType.rewardAmount = _rewardAmount;
        rewardType.stakeAmount = _stakeAmount;
        rewardsTypes.push(rewardType);
    }

    function updateRewardType(uint256 _id, uint256 _rewardAmount, uint256 _rewardDuration, uint256 _stakeAmount) external onlyOwner {
        RewardType storage rewardType = rewardsTypes[_id];
        rewardType.rewardAmount = _rewardAmount;
        rewardType.rewardDuration = _rewardDuration;
        rewardType.stakeAmount = _stakeAmount;
    }

    function addWithdrawFee(uint256 _duration, uint256 _feeAmount) external onlyOwner {
        WithdrawFee memory withdrawFee;
        withdrawFee.duration = _duration;
        withdrawFee.withdrawFeeAmount = _feeAmount;
        withdawFees.push(withdrawFee);
    }

    function updateWithdrawFee(uint256 _id, uint256 _duration, uint256 _feeAmount) external onlyOwner {
        WithdrawFee storage withdrawFee = withdawFees[_id];
        withdrawFee.duration = _duration;
        withdrawFee.withdrawFeeAmount = _feeAmount;
    }

    function stake(uint256 _stakeAmount, uint256 _rewardType) external checkZeroAddress nonReentrant{
        require(_stakeAmount > 0, "amount = 0");
        require(_rewardType < rewardsTypes.length , "Invalid RewardType ID");

        StakerReward memory stakeReward;
        stakeReward.id = stakerRewards.length;
        stakeReward.staker = msg.sender;
        stakeReward.stakeAmount = _stakeAmount;
        stakeReward.rewardType = _rewardType;
        stakeReward.stakeTime = block.timestamp;
        stakeReward.claimRewardTime = block.timestamp;
        stakeReward.claimed = false;
        stakeReward.rewardAmount = 0;

        RewardType storage reward = rewardsTypes[_rewardType];
        if(reward.stakeToken == address(stakingAdsToken))
            stakingAdsToken.transferFrom(msg.sender, address(this), _stakeAmount);
        else if(reward.stakeToken == address(stakingMeToken))
            stakingMeToken.transferFrom(msg.sender, address(this), _stakeAmount);
        else
            revert InvalidToken();
        stakerRewards.push(stakeReward);

        emit StakeEvent(stakeReward.id, msg.sender, _stakeAmount, _rewardType, stakeReward.stakeTime, false);
    }

    function withdraw(uint256 _id) external checkZeroAddress nonReentrant {
        StakerReward storage stakerReward = stakerRewards[_id];
        require(stakerReward.staker == msg.sender, "Invalid Staker");
        require(!stakerReward.claimed, "Already Claimed");
        uint256 curTime = block.timestamp;
        uint256 diffTime = curTime - stakerReward.stakeTime;
        RewardType storage rewardType = rewardsTypes[stakerReward.rewardType];
        require(diffTime >= rewardType.rewardDuration, "This stake is not unlocked yet");

        uint256 feeAmount = 0;
        for(uint256 i;i < withdawFees.length;i++) {
            if(withdawFees[i].duration == rewardType.rewardDuration) {
                feeAmount = withdawFees[i].withdrawFeeAmount;
            }
        }
        uint256 withdrawAmount = stakerReward.stakeAmount - stakerReward.stakeAmount * feeAmount / rewardType.stakeAmount;

        if(rewardType.stakeToken == address(stakingAdsToken))
            stakingAdsToken.transfer(msg.sender, withdrawAmount);
        else if(rewardType.stakeToken == address(stakingMeToken))
            stakingMeToken.transfer(msg.sender, withdrawAmount);
        else
            revert InvalidToken();

        uint256 timeDiff = curTime - stakerReward.claimRewardTime;
        uint256 reward = stakerReward.stakeAmount * rewardType.rewardAmount * timeDiff / rewardType.stakeAmount / rewardType.rewardDuration;
        stakerReward.rewardAmount += reward;
        stakerReward.claimRewardTime = curTime;
        stakerReward.claimed = true;

        emit WithdrawEvent(msg.sender, withdrawAmount, _id);
    }

    function claimADsGTReward() external nonReentrant{
        uint256 rewardAmount = 0;
        uint256 curTime = block.timestamp;
        for(uint256 i = 0;i < stakerRewards.length; i++) {
            if(stakerRewards[i].staker == msg.sender) {
                RewardType storage rewardType = rewardsTypes[stakerRewards[i].rewardType];
                if(rewardType.rewardToken == address(rewardsAdsToken)) {
                    if(!stakerRewards[i].claimed) {
                        uint256 timeDiff = curTime - stakerRewards[i].claimRewardTime;
                        uint256 reward = stakerRewards[i].stakeAmount * rewardType.rewardAmount * timeDiff / rewardType.stakeAmount / rewardType.rewardDuration;
                        rewardAmount += reward + stakerRewards[i].rewardAmount;
                        stakerRewards[i].claimRewardTime = curTime;
                    } else {
                        rewardAmount += stakerRewards[i].rewardAmount;
                        stakerRewards[i].rewardAmount = 0;
                    }
                }
            }
        }
        require(rewardAmount > 0, "No Reward");
        rewardsAdsToken.transfer(msg.sender, rewardAmount);
    }

    function claimMeGTReward() external nonReentrant{
        uint256 rewardAmount = 0;
        uint256 curTime = block.timestamp;
        for(uint256 i = 0;i < stakerRewards.length; i++) {
            if(stakerRewards[i].staker == msg.sender) {
                RewardType storage rewardType = rewardsTypes[stakerRewards[i].rewardType];
                if(rewardType.rewardToken == address(rewardsMeToken)) {
                    if(!stakerRewards[i].claimed) {
                        uint256 timeDiff = curTime - stakerRewards[i].claimRewardTime;
                        uint256 reward = stakerRewards[i].stakeAmount * rewardType.rewardAmount * timeDiff / rewardType.stakeAmount / rewardType.rewardDuration;
                        rewardAmount += reward + stakerRewards[i].rewardAmount;
                        stakerRewards[i].claimRewardTime = curTime;
                    } else {
                        rewardAmount += stakerRewards[i].rewardAmount;
                        stakerRewards[i].rewardAmount = 0;
                    }
                }
            }
        }
        require(rewardAmount > 0, "No Reward");
        rewardsMeToken.transfer(msg.sender, rewardAmount);
    }
    
    function emergencyWithdraw() external onlyOwner {
        rewardsAdsToken.transfer(msg.sender, rewardsAdsToken.balanceOf(address(this)));
        rewardsMeToken.transfer(msg.sender, rewardsMeToken.balanceOf(address(this)));
    }

    function createContent(bool _contentType, uint256 _endAt, string memory _siteUrl) external {
        require(_endAt > block.timestamp, "Invalid End Time");

        Content memory content;
        content.id = contents.length;
        content.creator = msg.sender;
        content.contentType = _contentType;
        content.createdAt = block.timestamp;
        content.endAt = _endAt;
        content.agreeVoteAmount = 0;
        content.rejectVoteAmount = 0;
        content.siteUrl = _siteUrl;

        contents.push(content);

        emit CreateContentEvent(msg.sender, content.id, content.createdAt, _endAt, 0,0, _siteUrl, _contentType);
    }

    function vote(uint256 _id, bool voteType, uint256 _voteAmount) external {
        require(_voteAmount > 0, "Invalid Vote Amount");
        uint256 curTime = block.timestamp;
        Content storage content = contents[_id];
        require(curTime <= content.endAt, "Finished Vote");

        if(voteType) {
            content.agreeVoteAmount += _voteAmount;
        } else {
            content.rejectVoteAmount += _voteAmount;
        }

        uint256 rewardAmount = 0;
        uint256 rewardSpeed = 0;
        address tokenAddress;
        if(content.contentType) {
            tokenAddress = address(rewardsMeToken);
        } else {
            tokenAddress = address(rewardsAdsToken);
        }
        (rewardAmount, rewardSpeed) = getRewardTokenInfo(tokenAddress);
        require(_voteAmount <= rewardAmount, "Insufficient Reward");

        for(uint256 i = 0;i < stakerRewards.length; i++) {
            if(_voteAmount > 0 && stakerRewards[i].staker == msg.sender) {
                RewardType storage rewardType = rewardsTypes[stakerRewards[i].rewardType];
                if(rewardType.rewardToken == address(tokenAddress)) {
                    if(!stakerRewards[i].claimed) {
                        uint256 timeDiff = curTime - stakerRewards[i].claimRewardTime;
                        uint256 _rewardAmount = stakerRewards[i].rewardAmount + stakerRewards[i].stakeAmount * rewardType.rewardAmount * timeDiff / rewardType.stakeAmount / rewardType.rewardDuration;

                        if(_voteAmount <= _rewardAmount) {
                            stakerRewards[i].rewardAmount = _rewardAmount - _voteAmount;
                            _voteAmount = 0;
                        } else {
                            stakerRewards[i].rewardAmount = 0;
                            _voteAmount = _voteAmount - _rewardAmount;
                        }
                        
                        stakerRewards[i].claimRewardTime = curTime;
                    } else {
                        if(_voteAmount <= stakerRewards[i].rewardAmount) {
                            stakerRewards[i].rewardAmount -= _voteAmount;
                            _voteAmount = 0;
                        } else {
                            stakerRewards[i].rewardAmount = 0;
                            _voteAmount -= stakerRewards[i].rewardAmount;
                        }
                    }
                }
            }
        }

        emit VoteEvent( _id, content.agreeVoteAmount, content.rejectVoteAmount);
    }

    function getContentsLength() public view returns (uint) {
        return contents.length;
    }

    function getRewardsTypesLength() public view returns (uint) {
        return rewardsTypes.length;
    }

    function getStakerRewardsLength() public view returns (uint) {
        return stakerRewards.length;
    }

    function getWithdrawFeesLength() public view returns (uint) {
        return withdawFees.length;
    }

    function getRewardTokenInfo(address _token) public view returns (uint, uint) {
        uint256 rewardAmount = 0;
        uint256 rewardSpeed = 0;
        uint256 curTime = block.timestamp;
        for(uint256 i = 0;i < stakerRewards.length; i++) {
            RewardType storage rewardType = rewardsTypes[stakerRewards[i].rewardType];
            if(rewardType.rewardToken == address(_token)) {
                if(stakerRewards[i].staker == msg.sender) {
                    if(!stakerRewards[i].claimed) {
                        uint256 timeDiff = curTime - stakerRewards[i].claimRewardTime;
                        uint256 reward = stakerRewards[i].stakeAmount * rewardType.rewardAmount * timeDiff / rewardType.stakeAmount / rewardType.rewardDuration;
                        rewardAmount = rewardAmount + reward + stakerRewards[i].rewardAmount;
                        uint256 speed = stakerRewards[i].stakeAmount * rewardType.rewardAmount / rewardType.stakeAmount / rewardType.rewardDuration;
                        rewardSpeed += speed;
                    } else {
                        rewardAmount += stakerRewards[i].rewardAmount;
                    }
                }
            }
        }
        return (rewardAmount, rewardSpeed);
    }

    function checkVotingStatus(uint _siteId) public view returns(uint) {
        require(_siteId < 0, "Invaild Site Id");

        for(uint256 i = 0;i < contents.length; i++) {
            if(contents[i].contentType == true || contents[i].id != _siteId){
                continue;
            }

            if(contents[i].endAt > block.timestamp){
                return 0;
            }

            if(contents[i].agreeVoteAmount > contents[i].rejectVoteAmount){
                return 1;
            }

            return 2;
        }

        return 0;
    }
}