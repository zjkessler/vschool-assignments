function middleware(req, res, next) {

	req.middleware = {
		name: "middleware",
		descrip: "look a middleware!"
	}
	next();
}
module.exports = middleware;