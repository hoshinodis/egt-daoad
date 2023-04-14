package config

import "github.com/caarlos0/env/v6"

type Config struct {
	Env        string `env:"W3AD_ENV" envDefault:"dev"`
	Port       int    `env:"PORT" envDefault:"80"`
	AdHost     string `env:"AD_HOST" envDefault:"ad"`
	DBHost     string `env:"W3AD_DB_HOST" envDefault:"127.0.0.1"`
	DBPort     int    `env:"W3AD_DB_PORT" envDefault:"13306"`
	DBUser     string `env:"W3AD_DB_USER" envDefault:"root"`
	DBPassword string `env:"W3AD_DB_PASSWORD" envDefault:"root"`
	DBName     string `env:"W3AD_DB_NAME" envDefault:"w3ad"`
}

func New() (*Config, error) {
	cfg := &Config{}
	if err := env.Parse(cfg); err != nil {
		return nil, err
	}
	return cfg, nil
}