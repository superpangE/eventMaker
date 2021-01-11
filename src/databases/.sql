create table eventmaker.Column(
    column_id Integer PRIMARY KEY,
    title char(30) not null,
    pos Integer not null,
    create_At DATETIME DEFAULT NOW()
);

create table eventmaker.Card(
  card_id Integer not null,
  column_id Integer not null,
  title Integer not null,
  pos Integer not null,
  content text not null,
  author char(30) not null,
  create_At DATETIME DEFAULT NOW(),
  PRIMARY KEY(card_id),
  FOREIGN KEY(column_id) REFERENCES eventmaker.Column(column_id)
);
