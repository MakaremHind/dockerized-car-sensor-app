const app = require("./server");
const logger = require("./config/logger");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});