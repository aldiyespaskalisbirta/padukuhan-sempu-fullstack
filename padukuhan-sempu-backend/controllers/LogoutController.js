const handleLogout = async (req, res) => {
  console.log("cookies: ", req.cookies);
  res.clearCookie("accessToken");
  res.sendStatus(204);
};

module.exports = handleLogout;
