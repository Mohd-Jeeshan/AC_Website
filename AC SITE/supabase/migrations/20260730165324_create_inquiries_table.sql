/*
# Create inquiries table for AC repair center (single-tenant, no auth)

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) - customer's full name
  - `phone` (text, not null) - contact phone number
  - `email` (text, nullable) - optional email address
  - `service` (text, not null) - requested service type (e.g. AC Repair, Installation, Maintenance)
  - `message` (text, nullable) - additional details from customer
  - `status` (text, not null default 'new') - inquiry status for tracking
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated CRUD because this is a no-auth public contact form.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries" ON inquiries FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_inquiries" ON inquiries;
CREATE POLICY "anon_update_inquiries" ON inquiries FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON inquiries;
CREATE POLICY "anon_delete_inquiries" ON inquiries FOR DELETE
  TO anon, authenticated USING (true);
