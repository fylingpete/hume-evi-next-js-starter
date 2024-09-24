import 'server-only';
import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
    const options: Record<string, string> = {
        apiKey: String(process.env.HUME_API_KEY),
    };

    // Add either clientSecret or secretKey based on what's available
    if ('clientSecret' in fetchAccessToken) {
        options.clientSecret = String(process.env.HUME_CLIENT_SECRET);
    } else {
        options.secretKey = String(process.env.HUME_CLIENT_SECRET);
    }

    const accessToken = await fetchAccessToken(options as any);

    if (accessToken === 'undefined') {
        return null;
    }

    return accessToken ?? null;
}