const z = require("zod");

exports.ZODScreateNewUser = z.object({
    userType: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
});

exports.ZODSsocialLoginNewUser = z.object({
    userType: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    uid: z.string(),
    socialAuth: z.boolean(),
});