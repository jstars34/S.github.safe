document.addEventListener("DOMContentLoaded", function () {
const SearchBtn = document.getElementById('SearchBtn');
const SearchInput = document.getElementById('SearchInput');
const SearchStore = document.getElementById('SearchContainer');
const DontShowInt = document.getElementById("DoNotShowAgain")
const Auto_SecureInt = document.getElementById("Auto-Secure")
const Alert_Message = document.getElementById("Alert-Message")
const LocalSave = localStorage.getItem("URLS")
const NumsSave = localStorage.getItem("Nums")
const StoreUrl = LocalSave ? JSON.parse(LocalSave) : {'a1':['google']};
let Nums = NumsSave ? JSON.parse(NumsSave) : 1;
const SettingBtn = document.getElementById("ntv99Btn")
const SettingDiv = document.getElementById("ntv99")
const Mainhashes = ["#//SCT","#"]
const SEO = { SEC: null,DSI:null,last:null,Name:null }
SearchSeCurity()
InSearch()
SettingBtn.addEventListener("click", function () {
    let Nox = SettingBtn.getAttribute('cli')
    if (Nox == '0') {
        SettingBtn.setAttribute("cli", '1')
        SettingDiv.style.display = ''
    }
    else {
        SettingDiv.style.display = 'none'
        SettingBtn.setAttribute("cli",'0')   
    }
})
Auto_SecureInt.addEventListener("change", function () {
    if (Auto_SecureInt.checked) {
        SEO.SEC = true
        document.location.hash = '//SCT'
    }
    else {
        SEO.SEC = false
        document.location.hash = ''

    }
})
Alert_Message.addEventListener("change", function () {
    if (Alert_Message.checked) {
        SEO.DSI = true
        // document.location.hash = '//SCT'
    }
    else {
        SEO.DSI = false
        DontShowInt.checked = false
        // document.location.hash = ''

    }
})
DontShowInt.addEventListener("change", function () {
    if (DontShowInt.checked) {
        SEO.DSI = true
    }
    else {
        SEO.DSI = false
    }
})
document.addEventListener("click", function (e) {
    if (!SettingDiv.contains(e.target) && e.target !== SettingBtn) {
                SettingDiv.style.display = 'none'
        SettingBtn.setAttribute("cli",'0')   
    }
})
async function ChckContent(VCont) {
    document.getElementById("LoadingAnime").style.display = ''
    // const API_KEY = '4895a87c3fdbd67a40df7c707b8f6f45';
    const API_KEY = '123456'
    const Main = 'https://hbsafe.onrender.com'
    const response = await fetch(`${Main}/message`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${API_KEY}`
      },
      body: JSON.stringify({message:VCont})
     })
    const data = await response.json()
    document.getElementById("LoadingAnime").style.display = 'none'
    
     return data.response || data.error
}
function SearchSeCurity() {
    console.log('1')
    const GetLocuts = localStorage.getItem("CEO")
    if (GetLocuts == null) {
        console.log("New User")
        const a = prompt("what would you like to call you Sr.")
        if (a.trim() == "") {
            SEO.Name = 'NameLess'
        }
        else {
            SEO.Name = a
            document.getElementById("Name").innerHTML = `Welcom back <b>${a}</b>!`
        }
    }
    else {
        let a = JSON.parse(GetLocuts)
        try {
            SEO.SEC = a.SEC
            SEO.DSI = a.DSI
            SEO.last = a.last
            if (a.DSI == true) {
                Alert_Message.checked = true
            }
            if (a.SEC == true) {
                Auto_SecureInt.checked = true
            
                document.location.hash = '//SCT'
            
            }
            document.getElementById("Name").innerHTML = `Welcom back <b>${SEO.Name}</b>!`

        } catch (error) {
            localStorage.removeItem("CEO")
            document.location.reload()
        }
    }
}
const MainsDomas = [ '.ai', '.com', '.net', '.edt', '.got' ]
function Load() {
        SearchStore.innerHTML = ''
        Object.entries(StoreUrl).forEach(([element,text]) => {
            let TXT = text[0]
            let ORig = SearchInput.value.toLowerCase()
            const SingleUrl = document.createElement("div")
            SingleUrl.classList.add("tit")
            SingleUrl.setAttribute("IDS",element)
            const TextUrl = document.createElement("text")
            TextUrl.textContent = TXT.length > 40? `${TXT.slice(0,30)}...`:TXT
            const RemoveUrl = document.createElement("span")
            RemoveUrl.textContent = '✕'
            RemoveUrl.title = 'remove suggestion'
            RemoveUrl.classList.add("RmoveUrl")
            RemoveUrl.setAttribute("IDS",element)
            if (SearchInput.value.trim() == '') {
            ap(SearchStore,SingleUrl)
            ap(SingleUrl,TextUrl)
            ap(SingleUrl,RemoveUrl)
            }
            //pass
             if ((ORig.slice(0, ORig.length) == TXT.slice(0, ORig.length)) || TXT.includes(ORig)) {
            ap(SearchStore,SingleUrl)
            ap(SingleUrl,TextUrl)
            ap(SingleUrl,RemoveUrl)
            }
             else {
            }
            SingleUrl.addEventListener("click", function () {
                const v = SingleUrl.getAttribute("IDS")
                SearchInput.value = StoreUrl[v][0]
                SearchBtn.click()
            })
            RemoveUrl.addEventListener("click", function () {
                const v = RemoveUrl.getAttribute("IDS")
                delete StoreUrl[ v ]
                const elt = RemoveUrl.parentElement
                elt.remove()
        })
        });
                const D = document.createElement("div")
    D.classList.add("RecentSearch")
    D.textContent = 'RECENTLY SEARCHES'
    SearchStore.prepend(D)
    if (SearchInput.value.trim() !== '') {
        SearchStore.removeChild(D)
    }
}
        function ap(a,b) {
        a.appendChild(b)
    }
    function re(a,b) {
        a.removeChild(b)
}
 function RememberUser(b,f,t) {//Display ask user to secure his url
  return new Promise((resolve) => {
    const MessageContainer = document.getElementById("MSG")
    const MessageText = document.getElementById("MainPoint")
      const CancelBtn = document.getElementById("CancelMesseg")
      CancelBtn.textContent = f == undefined?'Cancel':f
      const SecureBtn = document.getElementById("SecureMesseg")
      SecureBtn.textContent = t == undefined?'Submit':t
      
    MessageContainer.style.display = "";
    MessageText.innerHTML = `<h2>${b.split('\n')[0]}</h2><p>${b.split('\n')[1]}</p>`;
      const handleYes = () => {
        SEO.last = '1'
      cleanup();
      resolve(true);
    };

      const handleNo = () => {
        SEO.last = '0'
      cleanup();
      resolve(false);
    };

      function cleanup() {
        
      MessageContainer.style.display = "none";
      SecureBtn.removeEventListener("click", handleYes);
      CancelBtn.removeEventListener("click", handleNo);
    }

    SecureBtn.addEventListener("click", handleYes);
    CancelBtn.addEventListener("click", handleNo);
  });
}
function ChckifItisWork(v) {
    let text = v.split('.')
    let ForBid = /[!@#$%^&*()_=+{}[\]\\:;"'<>,?/]/
    // text =  == true? false:true
    return ForBid.test(text)
}
function InSearch() {
    let out = document.location.search
    let chck = document.location.hash 
    console.log(out,chck,Mainhashes.includes(chck))
    if (chck.trim() !== '' && !Mainhashes.includes(chck)) {
        document.getElementById("MXV00").innerHTML = ''
        document.getElementById("MXV00").innerHTML = '<div class="N404">404 Page not found! Try refreshing the page</div > '
        document.location.hash = ''
    }
    if (out.trim() !== '') {

        SearchInput.value = out.replace("?",'')
        setTimeout(() => {
        Auter()  
        document.location.search = ''
            
        }, 100);
    }
}
function Auter() {
    SearchBtn.click()
}
SearchBtn.addEventListener("click", async function () {
    console.log('clicked')
    const Vols = SearchInput.value.toLowerCase()
    if(Vols.trim() === "") {
        return
    }
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(Vols.trim())}`
    switch (true) {
        case Vols.startsWith("https://"):
            searchUrl = Vols
            break;
        case Vols.startsWith("http://"):
            if (SEO.DSI == true && document.location.hash !== '#//SCT') {
                let v = SEO.last
                let s = v == 0 ? false : true
            if (s) {
                  searchUrl = Vols.toLowerCase()
                let v;
                v = searchUrl.replace('http://', 'https://')
                searchUrl = v
            }
            else {
             searchUrl = `https://www.google.com/search?q=${encodeURIComponent(Vols.trim())}`
            }
            }
            else {
                let Ask;
                console.log(document.location.hash == '//SCT')
                if (document.location.hash == '#//SCT') {
                    Ask = true
                }
                else {
                    Ask = await RememberUser(`The URL is not secure Sr! \n Do you want to Secure it?`,'Continue','Secure')
                    if(SEO.DSI == true)Alert_Message.checked = true
                }
                console.log(Ask)
            if (Ask) {
                searchUrl = Vols.toLowerCase()
                let v;
                v = searchUrl.replace('http://', 'https://')
                searchUrl = v
            }
            else {
             searchUrl = `https://www.google.com/search?q=${encodeURIComponent(Vols.trim())}`
            }
            }
            break;
        case Vols.includes('.') && ChckifItisWork(Vols):
            searchUrl = `https://${Vols}`
            break;
        default:
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(Vols.trim())}`
            break;
    }
    const VCont = await ChckContent(Vols)
    console.log(VCont)
    if (VCont == 'False') {
        try {
        open(searchUrl, '_blank');
    } catch (error) {
        open(`https://www.google.com/search?q=${encodeURIComponent(Vols.trim())}`, '_blank');
    }
    }
    else {
        let v = await RememberUser("Warninng\nYou are trying to open bad content Sr!", 'GoBack', 'Try-else')
        if (v) {
            open("https://poki.com")
        }
        else {
            SearchInput.value = ''
            return
        }
    }
    
    let wasser = false
    Object.entries(StoreUrl).forEach(([element, text]) => {
        if (text[0].toLowerCase() == Vols.toLowerCase()) {
            wasser = true
        }

    });
    if (wasser == false && VCont == 'False') {
            Nums += 1
            StoreUrl[ `a${Nums}` ] = [ Vols.toLowerCase() ]
    }
    SearchInput.value = ''
})
SearchInput.addEventListener("focus", function () {
    Load()
})
SearchInput.addEventListener("input", function (event) {
    Load() 
})
SearchInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        SearchBtn.click()
    }
})
window.onbeforeunload = function () {
    localStorage.setItem("URLS",JSON.stringify(StoreUrl))
    localStorage.setItem("Nums",JSON.stringify(Nums))
    localStorage.setItem("CEO",JSON.stringify(SEO))
}    
})