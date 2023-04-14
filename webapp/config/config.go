package config

import "github.com/caarlos0/env/v6"

type Config struct {
	Env        string `env:"APP_ENV" envDefault:"dev"`
	Port       int    `env:"PORT" envDefault:"80"`
	DBHost     string `env:"WEBAPP_DB_HOST" envDefault:"localhost"`
	DBPort     int    `env:"WEBAPP_DB_PORT" envDefault:"3306"`
	DBUser     string `env:"WEBAPP_DB_USER" envDefault:"root"`
	DBPassword string `env:"WEBAPP_DB_PASSWORD" envDefault:"root"`
	DBName     string `env:"WEBAPP_DB_NAME" envDefault:"webapp"`
}

func New() (*Config, error) {
	cfg := &Config{}
	if err := env.Parse(cfg); err != nil {
		return nil, err
	}
	return cfg, nil
}