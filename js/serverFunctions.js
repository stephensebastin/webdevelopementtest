function validateLogin(uname, password) {
    if (uname === "admin" && password === "admin123") {
        return true;
    }
    return false;
}

function getEnrichedData(companyName) {
    var zohoData = "{\"id\":\"101\",\"status\":\"completed\",\"noOfRecordsMatched\":1,\"leadInfos\":[{\"HEADQUARTER\":\"Chennai, Tamil Nadu, India\",\"ALTR_EMAIL\":\"sales@zoho.jp,gstindia@zohofinance.com,nanya@zohocorp.com,ambi@zohocorp.com\",\"isNewData\":\"true\",\"EMAIL_2\":\"press@zohocorp.com\",\"EMAIL_1\":\"sales@zohocorp.com\",\"LOGO\":\"https://www.zoho.com/branding/images/zoho-logo.png\",\"ALTR_ADDRESS\":[{\"CITY\":\"Renigunta\",\"COUNTRY\":\"India\",\"STATE\":\"Andhra Pradesh\",\"ID\":\"16 - 237, Srikalahasti Road, Renigunta Pillapalem, Renigunta, Andhra Pradesh 517520, India\",\"PINCODE\":\"517520\"},{\"CITY\":\"Byron Bay\",\"COUNTRY\":\"Australia\",\"STATE\":\"NSW\",\"ID\":\"10/130 Jonson Street, Byron Bay, NSW 2481, Australia\",\"PINCODE\":\"2481\"},{\"CITY\":\"Dubai\",\"COUNTRY\":\"United Arab Emirates\",\"STATE\":\"Dubai\",\"ID\":\"Office 223, Building 09, Dubai Internet City, P.O. Box 502629, Dubai, United Arab Emirates\"},{\"CITY\":\"Pleasanton\",\"COUNTRY\":\"United States of America\",\"STATE\":\"CA\",\"ID\":\"4141 Hacienda Drive, Pleasanton, CA 94588, United States of America\",\"PINCODE\":\"94588\"}],\"DESCRIPTION\":{\"Meta_Description\":\"Run your entire business with Zoho's suite of online productivity tools and SaaS applications. Over 50 million users trust us worldwide.Try our Forever Free Plan!\"},\"TECHNOGRAPHICDATA\":{\"WIDGETS\":\"Zoho SalesIQ,EmbedSocial\",\"SSL_CERTIFICATE\":\"Let's Encrypt\",\"ADVERTISING\":\"ResponsiveAds\",\"CMS\":\"Drupal\",\"JS LIB AND FUNC\":\"html5shiv\",\"NAMESERVERS\":\"ns1.zohocorp.com,dns2.p03.nsone.net,dns4.p03.nsone.net,pdns90.ultradns.net,dns1.p03.nsone.net,pdns90.ultradns.biz,pdns90.ultradns.org,dns3.p03.nsone.net\",\"EMAIL HOSTING PROVIDERS\":\"Zoho Mail,SPF\",\"FRAMEWORKS\":\"TextBook,Unique\"},\"ABOUTUS\":\"https://www.zoho.com/aboutus.html\",\"S_ID\":\"502000594477495\",\"NO_OF_EMPLOYEES\":\"8000\",\"INDUSTRY\":{\"Computer Programming Services\":\"Includes information and data processing services, computer programming, systems design, consultancy, hosting and other computer related services.\"},\"CONTACT_1\":\"+61280662898\",\"ORG_NAME\":\"Zoho Corporation Pvt. Ltd\",\"REVENUE\":\"$437.8M\",\"CONTACT_2\":\"+861082637816\",\"CEO\":\"Sridhar Vembu\",\"ALIAS_ORG_NAME\":[\"Zoho Desk\",\"Zoho Creator\",\"Zoho Forms\",\"Zoho Backstage\",\"Zoho Zia\",\"Zoho Extensions\",\"Zoho ONE\",\"Zoho Technologies\",\"Zoho Projects\",\"Zoho Accounts\",\"ZOHO\"],\"OWNERSHIP\":\"Private\",\"ALTR_CONTACT\":\"+6567231040,+18778344428,+18445842497,+525541640960\",\"ADDRESS_1\":{\"CITY\":\"Chengalpattu Taluk\",\"COUNTRY\":\"India\",\"STATE\":\"Tamil Nadu\",\"ID\":\"Plot No. 140 & 151, GST Road, Vallancherry Village, Chengalpattu Taluk, Kanchipuram District, Tamil Nadu - 603 202, India\",\"PINCODE\":\"603 202\"},\"SOCIAL_LINK\":{\"FACEBOOK\":\"facebook.com/zoho\",\"INSTAGRAM\":\"instagram.com/zoho\",\"LINKEDIN\":\"linkedin.com/company/zohocorp\",\"YOUTUBE\":\"youtube.com/user/zoho\",\"TWITTER\":\"twitter.com/zoho\"},\"WEBSITE\":\"https://www.zoho.com\",\"ADDRESS_2\":{\"CITY\":\"Tenkasi\",\"COUNTRY\":\"India\",\"STATE\":\"Tamil Nadu\",\"ID\":\"Silaraipuravu Village, Mathalamparai, Tenkasi, Tirunelveli District, Tamil Nadu - 627 814, India\",\"PINCODE\":\"627 814\"},\"ALTR_SOCIAL_LINK\":{\"YOUTUBE\":\"youtube.com/zoho\"}}],\"message\":\"dataFound\",\"basedon\":\"website\",\"status\":\"completed\" }";
    var googleData = "{\"id\":\"102\",\"status\":\"completed\",\"noOfRecordsMatched\":1,\"leadInfos\":[{\"HEADQUARTER\":\"Mountain View, California, United States of America\",\"isNewData\":\"true\",\"LOGO\":\"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\",\"ABOUTUS\":\"https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1\",\"S_ID\":\"502000594466925\",\"NO_OF_EMPLOYEES\":\"118899\",\"INDUSTRY\":{\"Computer Programming Services\":\"Includes information and data processing services, computer programming, systems design, consultancy, hosting and other computer related services.\"},\"CONTACT_1\":\"+1512-343-5283\",\"ORG_NAME\":\"Google LLC\",\"REVENUE\":\"$161.857M\",\"CONTACT_2\":\"+1212-565-0000\",\"CEO\":\"Sundar Pichai\",\"OWNERSHIP\":\"Public\",\"ALTR_CONTACT\":\"+1949-794-1600\",\"ADDRESS_1\":{\"CITY\":\"Mountain View\",\"STATE\":\"California U.s\",\"ID\":\"1600, Amphitheatre Parkway, Mountain View, California U.s\",\"STREET\":\"1600, Amphitheatre Parkway\"},\"SOCIAL_LINK\":{\"FACEBOOK\":\"facebook.com/google\",\"INSTAGRAM\":\"instagram.com/google\",\"LINKEDIN\":\"linkedin.com/company/google\",\"YOUTUBE\":\"youtube.com/user/google\",\"TWITTER\":\"twitter.com/google\"},\"WEBSITE\":\"https://www.google.com\",\"ADDRESS_2\":{\"CITY\":\"Austin\",\"COUNTRY\":\"United States of America\",\"STATE\":\"TX\",\"ID\":\"500, W 2nd St, Suite 2900, Austin, Tx, United States of America, 78701\",\"STREET\":\"500, W 2nd St, Suite 2900\",\"PINCODE\":\"78701\"}}],\"message\":\"dataFound\",\"basedon\":\"website\",\"status\":\"completed\"}";
    var amazonData = "{\"id\":\"103\",\"status\":\"completed\",\"noOfRecordsMatched\":1,\"leadInfos\":[{\"HEADQUARTER\":\"Seattle, Washington, United States of America\",\"isNewData\":\"true\",\"EMAIL_1\":\"spoofing@amazon.com\",\"LOGO\":\"https://d39w7f4ix9f5s9.cloudfront.net/90/9c/51ab07474da3a6da25292fcc0826/amazon-logo-orgsmile.svg\",\"DESCRIPTION\":{\"Schema_Description\":\"A company this big shouldn t be able to grow this fast but Amazon s 21% revenue growth in 2019, to $281 billion, is the reason the Seattle company has catapulted to No. 2 on the Fortune 500. It's now ranked behind only its greatest rival and the world s biggest retailer: Walmart. For years a money loser, Amazon earned $11.6 billion in profit on more than $280 billion in annual sales. Key drivers for the so-called Everything Store s growth is that its consumer bundle keeps expanding. Its Prime delivery and entertainment subscription service counts more than 150 million global customers. As in prior years, the company s Amazon Web Services unit outpaced the company as a whole, growing revenue at a 37% clip to $35 billion.\"},\"TECHNOGRAPHICDATA\":{\"SSL_CERTIFICATE\":\"DigiCert Inc\"},\"ABOUTUS\":\"https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_v4_sib/130-2689571-1964037?ie=UTF8&nodeId=201909120\",\"S_ID\":\"502000594481295\",\"NO_OF_EMPLOYEES\":\"798000\",\"INDUSTRY\":{\"Wholesale and Retail Dealers\":\"Constitutes all entities in the trading chain including wholesale and retail businesses, distributors, dealers, exporters, importers, brokers, merchants, shops and e-shops, stores (offline and online) and non-stores etc.\"},\"CONTACT_1\":\"(206)266-1000\",\"ORG_NAME\":\"Amazon.com Inc.\",\"REVENUE\":\"$280.522B\",\"CEO\":\"Jeffrey P. Bezos\",\"ALIAS_ORG_NAME\":[\"Amazon AWS\",\"Amazon Web Services Inc\",\"Amazon.com\"],\"OWNERSHIP\":\"Public\",\"ADDRESS_1\":{\"CITY\":\"Seattle\",\"COUNTRY\":\"United States of America\",\"STATE\":\"Washington\",\"ID\":\"410, Terry Avenue North, Seattle, Washington, United States of America, 98109\",\"STREET\":\"410, Terry Avenue North\",\"PINCODE\":\"98109\"},\"SOCIAL_LINK\":{\"FACEBOOK\":\"facebook.com/amazon\",\"INSTAGRAM\":\"instagram.com/amazon\",\"LINKEDIN\":\"linkedin.com/company/amazon\",\"YOUTUBE\":\"youtube.com/user/amazon\",\"TWITTER\":\"twitter.com/amazon\"},\"WEBSITE\":\"https://www.amazon.com\"}],\"message\":\"dataFound\",\"basedon\":\"website\",\"status\":\"completed\"}";

    var noData = "{\"status\":\"completed\",\"message\":\"dataNotFound\"}"; //no i18n
    if (companyName.toLowerCase().includes("zoho")) {//no i18n
        return JSON.parse(zohoData);
    } else if (companyName.toLowerCase().includes("google")) {
        return JSON.parse(googleData);
    } else if (companyName.toLowerCase().includes("amazon")) {
        return JSON.parse(amazonData);
    } else {
        return JSON.parse(noData);
    }
}

document.getElementById("search_value").addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search_icon").click();
    }
  });

document.getElementById("search_icon").onclick = function(event) {
    let search_value = document.getElementById('search_value').value;
    let content = getEnrichedData(search_value);
    let defaul_div = document.getElementById("default_content");
    let company_div = document.getElementById("company_content");
    if(content.message.includes("dataNotFound")) {
        document.getElementById("error_message").innerHTML = "Company not found. Try Another";
    }
    else {
        document.getElementById("error_message").innerHTML = "";
        if(defaul_div.classList.contains("show")) {
            defaul_div.classList.remove("show");
            company_div.classList.add("show");
        }
        let i=0;
        // console.log(content.leadInfos[0]);
        document.getElementById("company_logo").src = `${content.leadInfos[0].LOGO}`;
        document.getElementById("company_name").innerHTML = `${content.leadInfos[0].ORG_NAME}`;
        document.getElementById("company_location").innerHTML = `${content.leadInfos[0].HEADQUARTER}`;
        document.getElementById("company_industry").innerHTML = `<b>Industry: ${Object.keys(content.leadInfos[0].INDUSTRY)[0]}</b><br>${Object.values(content.leadInfos[0].INDUSTRY)[0]}`;
        document.getElementById("company_website").href = `${content.leadInfos[0].WEBSITE}`;
        document.getElementById("company_about").href = `${content.leadInfos[0].ABOUTUS}`;
        document.getElementById("fb").href = `https://${content.leadInfos[0].SOCIAL_LINK.FACEBOOK}`;
        document.getElementById("insta").href = `https://${content.leadInfos[0].SOCIAL_LINK.INSTAGRAM}`;
        document.getElementById("twitter").href = `https://${content.leadInfos[0].SOCIAL_LINK.TWITTER}`;
        document.getElementById("yt").href = `https://${content.leadInfos[0].SOCIAL_LINK.YOUTUBE}`;
        document.getElementById("linkedin").href = `https://${content.leadInfos[0].SOCIAL_LINK.LINKEDIN}`;
        //insert for altr social media links


        //////////////////////////////////////techno
        if(content.leadInfos[0].TECHNOGRAPHICDATA == null) {
            document.getElementById("company_tech_data").innerHTML = "<p class='nodata_message'>No Data Available</p>";
        }
        else {
            let tech_keys = Object.keys(content.leadInfos[0].TECHNOGRAPHICDATA);
            let tech_data = Object.values(content.leadInfos[0].TECHNOGRAPHICDATA);
            document.getElementById("company_tech_data").innerHTML = "";
            for(i=0;i<tech_data.length;i++) {
                document.getElementById("company_tech_data").insertAdjacentHTML("afterbegin",`<p class="para_text"><b>${tech_keys[i]}:</b><br>${tech_data[i]}</p>`)
            }
        }

        //////////////////////////////////////description
        if(content.leadInfos[0].DESCRIPTION != null) {
            document.getElementById("company_description").innerHTML = `<b>Desciption</b><br>${Object.values(content.leadInfos[0].DESCRIPTION)[0]}`;
        }
        else {
            document.getElementById("company_description").innerHTML = "<b>Desciption</b><br><p  class='nodata_message'>No data Available</p>";
        }
        let aliases = content.leadInfos[0].ALIAS_ORG_NAME;
        if(aliases!=null){
            let text = `<br><b>Aliases</b><br>${aliases[0]}`;
            for(i=1;i<aliases.length;i++) {
                text += `, ${aliases[i]}`;
            }
            document.getElementById("company_aliases").innerHTML = text;
        }
        else {
            document.getElementById("company_aliases").innerHTML = "";
        }
        document.getElementById("company_ceo").innerHTML = `<b>CEO</b><br>${content.leadInfos[0].CEO}`;
        document.getElementById("company_revenue").innerHTML = `<b>Revenue</b><br>${content.leadInfos[0].REVENUE}`;
        document.getElementById("company_ownership").innerHTML = `<b>Ownership</b><br>${content.leadInfos[0].OWNERSHIP}`;
        document.getElementById("company_no_employees").innerHTML = `<b>No. Employees</b><br>${content.leadInfos[0].NO_OF_EMPLOYEES}`;


        //////////////////////////////////////contact
        let flag = true;
        document.getElementById("company_email").innerHTML = "";
        if(content.leadInfos[0].EMAIL_1 != null) {
            document.getElementById("company_email").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${content.leadInfos[0].EMAIL_1}</p></li>`);
            flag = false;
        }
        if(content.leadInfos[0].EMAIL_2 != null) {
            document.getElementById("company_email").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${content.leadInfos[0].EMAIL_2}</p></li>`);
            flag = false;
        }
        if(content.leadInfos[0].ALTR_EMAIL != null) {
            let res = content.leadInfos[0].ALTR_EMAIL.split(",");
            for(i=0;i<res.length;i++){
                document.getElementById("company_email").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${res[i]}</p></li>`);
            }
            flag = false;
        }
        if (flag) {
            document.getElementById("company_email").innerHTML = "<li class='nodata_message'>No Data Available</li>";
        }
        
        flag = true;
        document.getElementById("company_ph").innerHTML = "";
        if(content.leadInfos[0].CONTACT_1 != null) {
            document.getElementById("company_ph").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${content.leadInfos[0].CONTACT_1}</p></li>`);
            flag = false;
        }
        if(content.leadInfos[0].CONTACT_2 != null) {
            document.getElementById("company_ph").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${content.leadInfos[0].CONTACT_2}</p></li>`);
            flag = false;
        }
        if(content.leadInfos[0].ALTR_CONTACT != null) {
            let res = content.leadInfos[0].ALTR_CONTACT.split(",");
            for(i=0;i<res.length;i++){
                document.getElementById("company_ph").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${res[i]}</p></li>`);
            }
            flag = false;
        }
        if (flag) {
            document.getElementById("company_ph").innerHTML = "<li class='nodata_message'>No Data Available</li>";
        }

        flag = true;
        document.getElementById("company_address").innerHTML = "";
        if(content.leadInfos[0].ADDRESS_1 != null) {
            document.getElementById("company_address").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${content.leadInfos[0].ADDRESS_1.ID}</p></li>`);
            flag = false;
        }
        if(content.leadInfos[0].ADDRESS_2 != null) {
            document.getElementById("company_address").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${content.leadInfos[0].ADDRESS_2.ID}</p></li>`);
            flag = false;
        }
        if(content.leadInfos[0].ALTR_ADDRESS != null) {
            let res = content.leadInfos[0].ALTR_ADDRESS;
            for(i=0;i<res.length;i++){
                document.getElementById("company_address").insertAdjacentHTML("afterbegin",`<li><p class="para_text">${res[i].ID}</p></li>`);
            }
            flag = false;
        }
        if (flag) {
            document.getElementById("company_address").innerHTML = "<li class='nodata_message'>No Data Available</li>";
        }
    }
}
