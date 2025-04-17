const axios = require("axios");

class PrayerTimes {
    constructor (response_data){
        this.Datum= response_data.Datum,
        this.Hijri_ar= response_data.Hijri_ar, 
        this.Hijri= response_data.Hijri, 
        this.Fajr= response_data.Fajr, 
        this.Shuruq= response_data.Shuruq, 
        this.Dhuhr= response_data.Dhuhr, 
        this.Asr= response_data.Asr, 
        this.Maghrib= response_data.Maghrib, 
        this.Isha= response_data.Isha,  
        this.Jumaa= response_data.Jumaa
    }

    show() {
        console.log(`Datum : ${this.Datum}`);
        console.log(`Hijri_ar : ${this.Hijri_ar}`);
        console.log(`Hijri : ${this.Hijri}`);
        console.log(`Shuruq : ${this.Shuruq}`);
        console.log(`Dhuhr : ${this.Dhuhr}`);
        console.log(`Asr : ${this.Asr}`);
        console.log(`Maghrib : ${this.Maghrib}`);
        console.log(`Isha : ${this.Isha}`);
        console.log(`Jumaa : ${this.Jumaa}`);
        
    }
}

async function get_prayer_times() {
    const response = await axios.get("https://izr-cloud.online/getPrayers/")
    const ptimes = new PrayerTimes(response.data)
    ptimes.show();
}


get_prayer_times()