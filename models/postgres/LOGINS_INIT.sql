CREATE TABLE IF NOT EXISTS public.logins
(
    id SERIAL PRIMARY KEY,
    username character varying(32) COLLATE pg_catalog."default" NOT NULL,
    password character varying(256) COLLATE pg_catalog."default" NOT NULL,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    firstName character varying(32) COLLATE pg_catalog."default" NOT NULL,
    lastName character varying(32) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT unique_username UNIQUE (username),
	CONSTRAINT unique_email UNIQUE (email)
);