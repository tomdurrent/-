import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonButton,
    IonCardContent,
    IonToast,
} from '@ionic/react';
import React, {Component} from 'react';
// @ts-ignore
import seropp from 'sero-pp'
import axois from 'axios'
import {lang} from "../Language";

class Home extends Component {

    constructor(props: any) {
        super(props);

        this.state = {
            selectedAccount:'',
            accountsOption:new Array<any>(),
            showToast:false,
            toastMsg:'',
            submiting:false,
            language:'en_US',
        }
    }

    componentDidMount(): void {
        const that = this;
        this.initApp().then((data)=>{
            that.getAccountList();
        }).catch(data=>{

        });

        const lang = localStorage.getItem("language");
        this.setState({
            language:lang
        })
    }


    initApp(): Promise<any> {
        const dapp: any = {
            name: lang.e().Title,
            contractAddress: 'Airdrop',
            github: "https://github.com/sero-cash/airdrop",
            author: "sero.cash",
            url: document.location.href,
            logo: document.location.protocol + '//' + document.location.host + '/airdrop/sero.png'
        }

        return new Promise<any>((resolve, reject) => {
            seropp.init(dapp, function (data: any) {
                if (data === 'success') {
                    resolve(data);
                } else {
                    reject(data);
                }
            })
        })
    }

    submit():void{
        const that = this;
        try{
            // @ts-ignore
            if(!that.state.selectedAccount){
                that.setShowToast(true,"Please select one account");
                return
            }else{
                that.setState({
                    submiting:true,
                })

                seropp.getInfo(function (data:any):any {
                    if(data.error){
                        that.setShowToast(true,data.error);
                        that.setState({
                            submiting:false,
                        })
                    }else{
                        if(data.uuid){
                            const uuid:string = data.uuid;
                            let reqData:any = {
                                uuid:uuid,
                                // @ts-ignore
                                mainPKr:that.state.selectedAccount,
                            }
                            axois.post("https://daq.web.sero.cash/airdrop",reqData).then(response=>{
                                const _data = response.data;
                                if(_data === "success"){
                                    that.setShowToast(true,lang.e().Success);
                                    that.setState({
                                        submiting:false,
                                    })
                                }else if(_data === "nil"){
                                    that.setShowToast(true,lang.e().OpenInPopup);
                                    that.setState({
                                        submiting:false,
                                    })
                                }else if(_data === "exist"){
                                    that.setShowToast(true,lang.e().HavePart);
                                    that.setState({
                                        submiting:false,
                                    })
                                }
                            }).catch(error=>{
                                that.setShowToast(true,error.message);
                                that.setState({
                                    submiting:false,
                                })
                            })
                        }else{
                            that.setShowToast(true,lang.e().OpenInPopup);
                            that.setState({
                                submiting:false,
                            })
                        }
                    }
                })
            }

        }catch (e) {
            console.log("eee",e);
            that.setShowToast(true,lang.e().OpenInPopup);
            that.setState({
                submiting:false,
            })
        }
    }

    setShowToast(flag:boolean,msg:string){
        this.setState({
            showToast:flag,
            toastMsg:msg,
        })
    }

    getAccountList():any{
        let that = this;
        seropp.getAccountList(function (dataArr:any) {
            let tmp:Array<any> = [];
            let i = 0;
            for (let account of dataArr){
                tmp.push(<IonSelectOption value={account.MainPKr} key={i++} selected={i===0}>{account.Name} {account.MainPKr}</IonSelectOption>)
                if(i===0){
                    that.setState({
                        selectedAccount:account.MainPKr
                    })
                }
            }
            that.setState({
                accountsOption:tmp
            })
        });
    }

    changeAccount(e:any):any{
        // console.log(e,e.detail,e.detail.value);
        const value = e.detail.value;
        this.setState({
            selectedAccount:value
        })
    }

    setLanguage(e:any){
        const value = e.detail.value;
        this.setState({
            language:value
        })
        localStorage.setItem("language",value);
        window.location.href = "/airdrop"
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        const {accountsOption ,selectedAccount,showToast,toastMsg,submiting,language}= this.state;


        let rule:any = [];
        {
            lang.e().ActivityRule.Detail.forEach((value:any)=>{
                console.log("value",value)
                rule.push(<p>{value}</p>);
            })
        }

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <div style={{width:'60%',float:'left'}}></div>
                        <div style={{width:'40%',float:'right',textAlign:'right',padding:'0 15px',color:'#3880ff'}}>
                            <IonSelect placeholder="Language" value={language} onIonChange={(e)=>{this.setLanguage(e)}}>
                                <IonSelectOption value={"en_US"} selected={language==="en_US"}>English</IonSelectOption>
                                <IonSelectOption value={"zh_CN"} selected={language==="zh_CN"}>中文</IonSelectOption>
                                <IonSelectOption value={"ko_KR"} selected={language==="ko_KR"}>한국어</IonSelectOption>
                                <IonSelectOption value={"ja_JP"} selected={language==="ja_JP"}>日本語</IonSelectOption>
                            </IonSelect>
                        </div>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <IonToast
                        position="top"
                        isOpen={showToast}
                        onDidDismiss={() => this.setShowToast(false,'')}
                        message={toastMsg}
                        duration={3000}
                        color={"dark"}
                        buttons={[
                            {
                                text: 'X',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Cancel clicked');
                                }
                            }
                        ]}
                    />

                    <IonList>
                        <IonCard>
                            <IonListHeader>{lang.e().AccountSelection}</IonListHeader>
                            <IonSelect placeholder={lang.e().AccountSelection} value={selectedAccount} onIonChange={(e)=>{this.changeAccount(e)}}>
                                {accountsOption}
                            </IonSelect>
                        </IonCard>

                        <IonCard>
                            <IonListHeader>{lang.e().ActivityRule.Title}</IonListHeader>
                            <IonCardContent>
                                {rule}
                            </IonCardContent>
                        </IonCard>
                    </IonList>

                    <div>
                        <IonButton color="primary" expand="block" onClick={()=>{this.submit()}} disabled={submiting}>{lang.e().Submit}</IonButton>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

export default Home;
