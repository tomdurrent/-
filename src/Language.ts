class Language {

    e(): any {
        const lang = localStorage.getItem("language");
        if ("zh_CN" === lang) {
            return this.zh_CN;
        } else if ("en_US" === lang) {
            return this.en_US;
        } else if ("ko_KR" === lang) {
            return this.ko_KR;
        } else if ("ja_JP" === lang) {
            return this.ja_JP;
        } else {
            return this.en_US;
        }
    }

    zh_CN: any = {
        Title: "限时空投",
        Lang: "语言",
        AccountSelection: "选择账户",
        ActivityRule: {
            Title: "活动规则",
            Detail: [
                "1. 扫描二维码下载SERO Popup Wallet",
                "2. 注册钱包账户，扫描空投二维码并参与空投活动",
                "3. 每个手机仅限参与一次，最多获取100 SERO",
                "4. 限时参加，活动结束后统计并进行空投"
            ],
        },
        Submit: "提交",
        OpenInPopup: "请使用Popup钱包扫描空投二维码",
        HavePart:"你已经参加过! ",
        Success:"提交成功"
    }

    en_US: any = {
        Title: "Time-limited airdrop",
        Lang: "Language",
        AccountSelection: "Account Selection",
        ActivityRule: {
            Title: "Activity Rule",
            Detail: [
                "1. Scan QR code to download Popup wallet",
                "2. Register for a wallet account, scan the code and get the airdrop",
                "3. Only receive 100 SERO per phone",
                "4. Participate for a limited time, count and airdrop after the event"
            ],
        },
        Submit: "Submit",
        OpenInPopup: "Please use Popup wallet to scan the airdrop QR code",
        HavePart:"You have participate!",
        Success:"Submit successfully !"
    }

    ko_KR: any = {
        Title: "시간 제한 에어 드롭",
        Lang: "언어",
        AccountSelection: "계정 선택",
        ActivityRule: {
            Title: "활동 규칙",
            Detail: [
                "1. QR 코드를 스캔하여 SERO Popup Wallet을 다운로드하십시오.",
                "2. 지갑 계정을 등록하고 에어 드롭 QR 코드를 스캔하여 에어 드롭 활동에 참여하십시오",
                "3. 전화 당 한 번 참여하고 최대 100 개의 SERO를 확보하십시오.",
                "4. 이벤트 후 제한된 시간, 카운트 및 에어 드랍에 참여"
            ],
        },
        Submit: "제출",
        OpenInPopup: "请使用Popup钱包扫描空投二维码",
        HavePart:"참여했습니다!",
        Success:"성공적으로 제출하십시오!"
    }

    ja_JP: any = {
        Title: "期間限定エアドロップ",
        Lang: "言語",
        AccountSelection: "アカウントを選択",
        ActivityRule: {
            Title: "活動ルール",
            Detail: [
                "1. QRコードをスキャンして、SERO Popup Walletをダウンロードします",
                "2. ウォレットアカウントに登録し、エアドロップQRコードをスキャンして、エアドロップアクティビティに参加する",
                "3. 電話ごとに1回参加し、最大100 SEROを取得",
                "4. 限られた時間に参加し、イベント後に数えて空中投下"
            ],
        },
        Submit: "提出する",
        OpenInPopup: "ポップアップウォレットを使用してエアドロップQRコードをスキャンしてください\n",
        HavePart:"参加しました！",
        Success:"正常に送信します！"
    }
}

const lang: Language = new Language();

export {
    lang
}