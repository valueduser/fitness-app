ALTER TABLE workout 
  ADD COLUMN is_active BOOLEAN DEFAULT true;

ALTER TABLE activity 
  ADD COLUMN is_active BOOLEAN DEFAULT true;