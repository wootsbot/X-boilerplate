import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({
	providers: [
		GitHub({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
	],
	// secret: process.env.AUTH_SECRET,
	pages: {
		signIn: "/login",
	},
});
