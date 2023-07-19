const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const accessToken = req.cookies.jwt;

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  return res.status(204).json({ message: "Logged out successfully" });
};

module.exports = handleLogout;
