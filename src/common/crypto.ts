import CryptoES from 'crypto-es';

export function generateHMAC(data: string, key: string) {
    const hmac = CryptoES.algo.HMAC.create(CryptoES.algo.SHA1, key);
    hmac.update(data);
    const hash = hmac.finalize();
    return hash.toString(CryptoES.enc.Base64);
}
