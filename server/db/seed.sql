\c bbandida;

INSERT INTO users (email, password) VALUES
  (
    'casey@casey.com',
    '$2a$10$eH0zRDbUwcFX7lr/4avi5O5XvfV0wSCidNs0pfcBxaPGtqFCbeMUO'
  );

INSERT INTO contributor (name, role, link) VALUES
  (
    'Casey R Harding',
    'Photographer',
    'www.caseyharding.com'
  );

INSERT INTO contributor (name, role, link) VALUES
  (
    'Tom Choe',
    'Beat Box',
    'https://tomChoe.com'
  );

INSERT INTO contributor (name, role, link) VALUES
  (
    'Hani Zahra',
    'DJ',
    'http://HaniIsAwesome.com'
  );

INSERT INTO products (image_ids, description, contributors, price) VALUES
  (
    '{3, 7, 9, 1, 2}',
    'BB and Ida fashionable dress',
    '{2, 1, 3}',
    '9.99'
  );
