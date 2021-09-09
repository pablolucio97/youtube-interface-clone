import JWT from 'jsonwebtoken';

type JWTProps = {
  sub: string;
};

export default async function renderToken() {
  const ALGORITHM = 'HS256';
  const newToken = (payload: JWTProps) =>
    new Promise((resolve) => {
      JWT.sign(
        { payload },
        process.env.MYKEY,
        { algorithm: ALGORITHM },
        (err, token) => {
          if (err) {
            throw new Error('An error has ocurred.');
          }
          resolve(token);
        },
      );
    });
  const JWTDATA = {
    sub: process.env.JWT_SECRET,
  };

  const generatedToken = 'await newToken(JWTDATA)';
  console.log(generatedToken);
  return generatedToken;
}
