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

  INSERT INTO products (title, description, contributors, images, mainImage, price, number_sold) VALUES
    (
      'Rose Dress',
      'Dress: bb+ida, worsted wool, purple polyester, hand woven detail',
      '{}',
      '{https://res.cloudinary.com/bbandida/image/upload/v1525276132/rose-dress-1.jpg}',
      'https://res.cloudinary.com/bbandida/image/upload/v1525276132/rose-dress.jpg',
      0,
      0
    ),
    (
      'Alina Coat',
      'Fuying Coat  Coat: bb+ida',
      '{}',
      '{https://res.cloudinary.com/bbandida/image/upload/v1525276115/alina-coat-1.jpg}',
      'http://res.cloudinary.com/bbandida/image/upload/v1525276115/alina-coat.jpg',
      0,
      0
    ),
    (
      'Sara Wedding',
      'Sara October 2015 Vintage Repurpost',
      '{1}',
      '{https://res.cloudinary.com/bbandida/image/upload/v1525276087/sara-wedding-1.jpg}',
      'https://res.cloudinary.com/bbandida/image/upload/v1525276087/sara-wedding.jpg',
      0,
      0
    ),
    (
      'Suzi Wedding',
      'Suzi Custom coat',
      '{}',
      '{https://res.cloudinary.com/bbandida/image/upload/v1525276049/suzi-wedding-1.jpg, https://res.cloudinary.com/bbandida/image/upload/v1525276049/suzi-wedding-2.jpg, https://res.cloudinary.com/bbandida/image/upload/v1525276049/suzi-wedding-4.jpg}',
      'https://res.cloudinary.com/bbandida/image/upload/v1525276049/suzi-wedding.jpg',
      0,
      0
    ),
    (
      'Alina Dress',
      'Alina Custom Bridemaids Dresses',
      '{}',
      '{https://res.cloudinary.com/bbandida/image/upload/v1525276068/alina-dress-2.jpg}',
      'https://res.cloudinary.com/bbandida/image/upload/v1525276068/alina-dress.jpg',
      0,
      0
    );
