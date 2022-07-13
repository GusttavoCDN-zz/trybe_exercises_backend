-- Active: 1656725077704@@localhost@3306@Scientists
-- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT * FROM `Scientists` WHERE name LIKE '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT * FROM `Projects` WHERE code LIKE 'A%' ORDER BY name;

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT * FROM `Projects` WHERE code LIKE '%3%' ORDER BY name;

-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT COUNT(*) FROM `AssignedTo` WHERE project IN ('AeH3', 'Ast3', 'Che1');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.s
SELECT * FROM `Projects` WHERE hours > 500;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM `Projects` WHERE hours BETWEEN 250 AND 800;

-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
SELECT name, code FROM `Projects` WHERE name NOT LIKE 'A%';

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT * FROM `Projects` WHERE code LIKE '%H%';