const jwt = require('jsonwebtoken');

const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' }); 
};

const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

const setTokens = (userId, res) => {
    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(userId);

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, 
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    return { accessToken, refreshToken };
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    setTokens,
};
