\c bbandida;

INSERT INTO users (email, password) VALUES
  (
    'casey@casey.com',
    '$2a$10$eH0zRDbUwcFX7lr/4avi5O5XvfV0wSCidNs0pfcBxaPGtqFCbeMUO'
  );

INSERT INTO contributor (name, role, link) VALUES
  (
    'Pop Mod',
    'Photography',
    'popmodphoto.org'
  ),
  (
    'Stevie Ann Smith',
    'Hair',
    'https://smithanddavissalon.com'
  ),
  (
    'Shannon O''Brien',
    'Makeup',
    'www.shannonobrienmua.com'
  ),
  (
    '@thepowderandglory',
    'Brows',
    'https://esthetichaus.com'
  ),
  (
    'dbleudazzled',
    'Tights',
    'www.dbleudazzled.com'
  ),
  (
    'Damien Maloney',
    'Photography',
    'damienmaloney.com'
  );

  INSERT INTO products (image_ids, description, contributors, price, number_sold) VALUES
    (
      '{1, 2}',
      'Dress: bb+ida, worsted wool, purple polyester, hand woven detail',
      '{}',
      0,
      0
    ),
    (
      '{4, 5}',
      'Fuying Coat  Coat: bb+ida',
      '{}',
      0,
      0
    ),
    (
      '{6, 7}',
      'Sara October 2015 Vintage Repurpost',
      '{1}',
      0,
      0
    ),
    (
      '{8}',
      'Suzi Custom coat',
      '{}',
      0,
      0
    ),
    (
      '{9}',
      'Alina Custom Bridemaids Dresses',
      '{}',
      0,
      0
    );


















