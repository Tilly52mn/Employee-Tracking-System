INSERT INTO department (dept_name)
VALUES
('Design Engineering'),
('Sales'),
('Purchasing');

INSERT INTO job_title (title,salary,department_id)
VALUES
  ('Engineer I', 55000,1),
  ('Engineer II', 65000,1),
  ('Engineer III', 75000,1),
  ('Team Manager', 85000,2),
  ('Department Manager', 95000,1),
  ('Sales Coordinator', 55000,2),
  ('Senior Sales Cordinator', 75000,2),
  ('jr Purchaser', 60000,3),
  ('Sr Purchaser', 70000,3),
  ('Managing Purchaser', 90000,3);
 
  INSERT INTO employee (first_name, last_name, title_id, manager_id)
VALUES
  ('Nick', 'Grundlow',3,10),
  ('Tyler', 'Pojonowski',3,10),
  ('Jake', 'Eckroad',2,10),
  ('Seth', 'Sanderson',1,10),
  ('Kim', 'Howlsklaw',8,12),
  ('Mike', 'Wilert',9,12),
  ('Kelsey', 'Tillman',8,12),
  ('Scott', 'johnson',7,11),
  ('Chris', 'Smith',6,11),
    ('Joe', 'Lidberg',5,NULL),
  ('Dave', 'Gunderson',4,NULL),
  ('Jeff', 'boyde',10,NULL);

  