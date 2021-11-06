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
 

  INSERT INTO manager (first_name, last_name, title_id)
VALUES
  ('Joe', 'Lidberg', 5),
  ('Dave', 'Gunderson',4),
  ('Jeff', 'boyde',10);

  INSERT INTO employee (first_name, last_name, title_id, manager_id)
VALUES
  ('Nick', 'Grundlow',3,1),
  ('Tyler', 'Pojonowski',3,1),
  ('Jake', 'Eckroad',2,1),
  ('Seth', 'Sanderson',1,1),
  ('Kim', 'Howlsklaw',8,3),
  ('Mike', 'Wilert',9,3),
  ('Kelsey', 'Tillman',8,3),
  ('Scott', 'johnson',7,2),
  ('Chris', 'Smith',6,2);

  