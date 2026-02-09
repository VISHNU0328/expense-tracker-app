create table expenses (
 id uuid primary key default gen_random_uuid(),
 amount numeric,
 category text,
 created_at timestamp default now()
);
