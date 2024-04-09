const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "password",
  port: 5432,
});

const mockData = [
  {
    stock_id: 1,
    stock_symbol: "OXY",
    stock_name: "Occidental Petroleum Corporation",
    stock_sector: "Energy",
    stock_market_cap: 601011840778.75,
    stock_price: 9993.51,
    stock_volume: 38235338,
    stock_market: "NYSE",
  },
  {
    stock_id: 2,
    stock_symbol: "OCFC",
    stock_name: "OceanFirst Financial Corp.",
    stock_sector: "Finance",
    stock_market_cap: 962724987126.69,
    stock_price: 8809.8,
    stock_volume: 459721444,
    stock_market: "NASDAQ",
  },
  {
    stock_id: 3,
    stock_symbol: "MBSD",
    stock_name: "FlexShares Disciplined Duration MBS Index Fund",
    stock_sector: "n/a",
    stock_market_cap: 639639063249.02,
    stock_price: 3105.37,
    stock_volume: 995939143,
    stock_market: "NASDAQ",
  },
];
