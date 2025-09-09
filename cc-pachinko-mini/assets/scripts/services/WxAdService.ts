// Minimal WeChat rewarded video wrapper
// Usage: WxAdService.showRewarded('your-adunit-id').then(rewarded => { if (rewarded) grant(); })

declare const wx: any;

export class WxAdService {
    static isSupported(): boolean {
        // eslint-disable-next-line no-undef
        return typeof wx !== 'undefined' && !!wx.createRewardedVideoAd;
    }

    static showRewarded(adUnitId: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                if (!WxAdService.isSupported()) {
                    resolve(false);
                    return;
                }
                const ad = wx.createRewardedVideoAd({ adUnitId });
                ad.onError?.((err: any) => {
                    console.warn('RewardedVideo error', err);
                    resolve(false);
                });
                ad.onClose?.((res: any) => {
                    const rewarded = !!(res && (res.isEnded || res.isEnded === undefined));
                    resolve(rewarded);
                });
                const show = () => ad.show().catch(() => ad.load().then(() => ad.show()));
                show();
            } catch (e) {
                resolve(false);
            }
        });
    }
}

