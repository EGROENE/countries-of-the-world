// Access area on country page where its data should display:
const countryDataContainer = document.getElementById("country-page-main-container");

// Get name of country on html page:
const countryName = document.title;

// Search API by countryName, return object:
const searchAPIByCountryName = `https://restcountries.com/v3.1/name/${countryName}`;
async function getCountry() {
  const response = await fetch(searchAPIByCountryName);
  let countryDataObject = await response.json();
  for (let element of countryDataObject) {
    // Set country to equal an element returned from API, based on search of API by the doc title (countryName).
    // If DR Congo, check if official name includes countryName.
    // Else, check if countryName includes the common name.
    if (countryName === "Democratic Republic of the Congo") {
      if (element.name.official.includes(countryName)) {
        country = element;
      }
    } else {
      if (countryName.includes(element.name.common)) {
        country = element;
      }
    }
  }

  // Set BG image for country:
  const specialBGCountriesImgArrays = {
    northkoreaBGs: [
      "https://plus.unsplash.com/premium_photo-1670552850940-0f9932fb3d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGglMjBrb3JlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1604399158527-4c802e850b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGglMjBrb3JlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1584890309466-272e6fffb487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGglMjBrb3JlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1604360898901-ddcbeafab6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm9ydGglMjBrb3JlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543994253-f10b4f0c9495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4NjQzNjg2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543325768-557b5f98dfd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8ODY0MzY4Nnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Z1L3BsrNUrVA71FllgGPpgHaEK%26pid%3DApi&f=1&ipt=b376f2fcb31d417196a1d4bbfbb217b707a94eea9ddae322c4c96b19977419fa&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QuwDw9qTDrFX-n6N-cZDEAHaGe%26pid%3DApi&f=1&ipt=4b1549e10e814f3365a719b9b030492a094f636305606b9ad2a93565ca83b18c&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6JOzsFzeXBQaIAHWhKEn8AHaE6%26pid%3DApi&f=1&ipt=e93bc8fe7aa979ecfc8d9f6488091e5ec426d9e203da5600557e15d2d386c180&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jsiE1iGMgLU2LBiFUCZsTQHaFj%26pid%3DApi&f=1&ipt=1d52573c418817ff44b67ead61db5736cd5b2e84333e855a48bd6a7ad0155525&ipo=images",
    ],

    southgeorgiaBGs: [
      "https://images.unsplash.com/photo-1670392269716-8ae55fe7a992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBnZW9yZ2lhJTIwaXNsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1592020425844-09e889a937bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBnZW9yZ2lhJTIwaXNsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1664303218668-03fa4e612038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c291dGglMjBnZW9yZ2lhJTIwaXNsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517784120905-d9f8d5aced1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c291dGglMjBnZW9yZ2lhJTIwaXNsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXRoJTIwZ2VvcmdpYSUyMGlzbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "",
    ],

    barbadosBGs: [
      "https://plus.unsplash.com/premium_photo-1670689708255-0bbae284cf88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmFkb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633847017573-fa07b1bddc07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmFkb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633847016580-b7a15cc813d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmFkb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1636728150922-e7361791595a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmFkb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1663047236438-b13c19c03936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhcmJhZG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1626023523667-a33431da2cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmJhZG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1557188969-16b469a5b6c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmFkb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],

    bahamasBGs: [
      "https://images.unsplash.com/photo-1589786161184-6d43d20526e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFoYW1hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1559956144-83a135c9872e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFoYW1hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1598979281903-65879e65bd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhaGFtYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1501698335706-90b736210a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhaGFtYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523659945955-fe95eb9bc70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhaGFtYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],

    christmasislandBGs: [
      "https://images.unsplash.com/photo-1516420114325-97684b59e4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjU3MTUyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iP3NOrsGX5eeF6PuXIFPxgHaEK%26pid%3DApi&f=1&ipt=f9b1260af79278980c65c5a6892be6c50298ccb545925a92e54cfa8aceaa5f7a&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hePfkYgxBRcaZwZPN4INDgHaFj%26pid%3DApi&f=1&ipt=3c9260ec4887f499c56f0263425e240d4f071b4562f5f10a6166ebe09c8b319d&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.F1jgwQHg3f60PAlYieGXmQHaE8%26pid%3DApi&f=1&ipt=56c8e447b03a5daf94496b0e7cbc064c6a1e6b4f621ce590664436da41e2d319&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Yt_pRlISvApF2Ajj-FMzegHaE8%26pid%3DApi&f=1&ipt=a30a6e470b53d6ad70ae04ec782592f98fb404e6d5fccac11d60d5021dbbf283&ipo=images",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FsedohW16384CLLIH-12mgHaE8%26pid%3DApi&f=1&ipt=2aa52b05e48b42e952134f63847a4688e96b17285f55f8d12a6574ebb40a797d&ipo=images",
    ],

    liechtensteinBGs: [
      "https://images.unsplash.com/photo-1512424113276-fa9f6a112384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGllY2h0ZW5zdGVpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1625138385193-bca1f03448ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGllY2h0ZW5zdGVpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1625474165845-0c6e04ecef58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGllY2h0ZW5zdGVpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1545860405-d4f425871cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZWNodGVuc3RlaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605453288713-e215a57e30ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGllY2h0ZW5zdGVpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],

    vaticancityBGs: [
      "https://images.unsplash.com/photo-1602940614745-b01c749443e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmF0aWNhbiUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523020286969-4de832476819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhdGljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1568797732023-0212d2c045b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZhdGljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1610655769765-be8a0dd9627a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZhdGljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579190335220-95b9e4873789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmF0aWNhbiUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],

    sanmarinoBGs: [
      "https://images.unsplash.com/photo-1553027578-a8a2b2b13329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwbWFyaW5vJTIwZXVyb3BlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1664331746739-119f4a110e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwbWFyaW5vJTIwdGhlJTIwY291bnRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],

    centralafricanrepublicBGs: [
      "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjkzNDIxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500109232983-ec562bebb685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjQ0Mzg3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1572199135604-2a2934d355d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ],

    drcongoBGs: [
      "https://images.unsplash.com/photo-1576526164505-9a2540866186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVtb2NyYXRpYyUyMHJlcHVibGljJTIwb2YlMjB0aGUlMjBjb25nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1623930180584-1b14bc584169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVtb2NyYXRpYyUyMHJlcHVibGljJTIwb2YlMjB0aGUlMjBjb25nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnlhbXVyYWdpcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1538430352266-de6bcba9a06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVtb2NyYXRpYyUyMHJlcHVibGljJTIwb2YlMjB0aGUlMjBjb25nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],

    republicofthecongoBGs: [
      "https://images.unsplash.com/photo-1432298026442-0eabd0a98870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZ28lMjBqdW5nbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZ28lMjBqdW5nbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1511936606692-5e0d73f6b638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmdvJTIwanVuZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],

    réunionBGs: [
      "https://images.unsplash.com/photo-1580910727537-e4c80c6a6a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmV1bmlvbiUyMGlzbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1556942769-8905a2d7ef28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmV1bmlvbiUyMGlzbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1609572847658-a2f35fc1755d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJldW5pb24lMjBpc2xhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1584886760592-5868e1086ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmV1bmlvbiUyMGlzbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  };

  // If particular country is a country that has unique background images, set one of these randomly as the BG. Else, set BG img based on search:
  let specialCountryKey = country.name.common.replace(/\s/g, "").toLowerCase() + "BGs";

  if (Object.keys(specialBGCountriesImgArrays).includes(specialCountryKey)) {
    let specialCountryBGImages = specialBGCountriesImgArrays[specialCountryKey];
    let randIndex = Math.floor(Math.random() * specialCountryBGImages.length);
    document.body.style.backgroundImage =
      "url(" + specialCountryBGImages[randIndex] + ")";
  } else {
    document.body.style.backgroundImage =
      "url(https://source.unsplash.com/1900x600/?" + country.name.common.toLowerCase();
  }

  // Get country name for header on country pages:
  let countryPageHeader;
  // If DR Congo is the country, set its official name as the header, not its common name:
  if (country.name.common === "DR Congo") {
    countryPageHeader = "<header>" + country.name.official.toUpperCase() + "</header>";
  } else {
    countryPageHeader = "<header>" + country.name.common.toUpperCase() + "</header>";
  }

  // Get native names:
  let nativeNames;
  if (country.name.nativeName) {
    nativeNames = Object.values(country.name.nativeName);
    nativeNames = nativeNames.filter(
      (nativeName) => nativeName.common !== country.name.common
    );
    if (nativeNames.length >= 1) {
      nativeNames =
        "<p>" + nativeNames.map((nativeName) => nativeName.common).join(" | ") + "</p>";
    }
  }

  // Get demonyms:
  let demonyms = "<p>Demonyms: <span>NONE</span></p>";
  let maleDemonym;
  let femaleDemonym;
  if (country.demonyms) {
    demonyms = Object.values(country.demonyms)[0];
    demonyms = Object.values(demonyms);
    maleDemonym = demonyms[0];
    femaleDemonym = demonyms[1];
    if (maleDemonym === femaleDemonym) {
      demonyms = "<p>Demonym: <span>" + maleDemonym + "</span></p>";
    } else {
      demonyms =
        "<p>Demonyms: <span> " +
        femaleDemonym +
        " (f), " +
        maleDemonym +
        " (m)</span></p>";
    }
  }

  // Get currency/ies:
  let currencies = "<p>Currency: <span>NONE</span></p>";
  if (country.currencies) {
    currencies = Object.values(country.currencies);
    currencies = currencies.map((currency) => currency.name);
    if (currencies.length > 1) {
      currencies = "<p>Currencies: " + "<span>" + currencies.join(", ") + "</span></p>";
    } else {
      currencies = "<p>Currency: " + "<span>" + currencies + "</span></p>";
    }
  }

  // Get country's timezones:
  let timezones;
  if (country.timezones.length === 1) {
    timezones = "<p>Timezone: <span>" + country.timezones.toString() + "</span></p>";
  } else {
    timezones = "<p>Timezones: <span>" + country.timezones.join(", ") + "</span></p>";
  }

  // Get country's driving side:
  let drivingSide = "NO ROADS";
  if (country.car.side) {
    drivingSide = "<p>Driving Side: <span>" + country.car.side + "</span></p>";
  }

  // Get continent(s):
  let continents;
  if (country.continents.length === 1) {
    continents = "<p>Continent: <span>" + country.continents.toString() + "</span></p>";
  } else {
    continents = "<p>Continents: <span>" + country.continents.join(", ") + "</span></p>";
  }

  // Get region:
  let region = "<p>Region: <span>" + country.region + "</span><p>";

  // Get subregion:
  let subregion = "<p>Subregion: <span>NONE</span></p>";
  if (country.subregion) {
    subregion = "<p>Subregion: <span>" + country.subregion + "</span></p>";
  }

  // Get capital(s):
  let capital = "<p>Capital: <span>NONE</span></p>";
  if (country.capital) {
    capital = Object.values(country.capital);
    if (capital.length > 1) {
      capital = "<p>Capitals: <span>" + capital.join(", ") + "</span></p>";
    } else {
      capital = "<p>Capital: <span>" + capital + "</span></p>";
    }
  }

  // Get language(s):
  let languages = "<p>Languages: <span>NONE</span></p>";
  if (country.languages) {
    languages = Object.values(country.languages);
    if (languages.length > 1) {
      languages = "<p>Languages: " + "<span>" + languages.join(", ") + "</span></p>";
    } else if (languages.length === 1) {
      languages = "<p>Language: " + "<span>" + languages + "</span>" + "</p>";
    }
  }

  // Get link to country's Google Maps page:
  let googleMapsLink = Object.values(country.maps)[0];

  // Get bordering countries:
  let borderCountries = country.borders;

  // Array containing search queries:
  let searchQueries = [];

  // Function that searches border countries by their code:
  let searchBorderCountries;
  const searchBorderCountriesFunction = (borderCountryCode) => {
    searchBorderCountries = "https://restcountries.com/v3.1/alpha/" + borderCountryCode;
    searchQueries.push(searchBorderCountries);
  };

  async function getBorders() {
    let borderCountriesContainerHeader = document.querySelector(
      "#border-countries-container header"
    );
    let borderCountriesList = document.getElementById("border-countries-list");
    if (borderCountries) {
      if (borderCountries.length > 1) {
        borderCountriesContainerHeader.innerHTML = "<header>Border Countries: </header>";
        if (screen.width <= 414 && screen.width >= 360) {
          borderCountriesList.style.justifyContent = "center";
        }
      } else {
        borderCountriesContainerHeader.innerHTML = "<header>Border Country: </header>";
        if (screen.width <= 414 && screen.width > 0) {
          borderCountriesList.style.justifyContent = "center";
        }
      }
      // Call search for each border country:
      for (let borderCountryCode of borderCountries) {
        searchBorderCountriesFunction(borderCountryCode);
      }

      // For every query...
      let borderCountryDataObjects = [];
      for (let query of searchQueries) {
        let responseBorders = await fetch(query);
        let borderCountryDataObject = await responseBorders.json();
        borderCountryDataObjects.push(borderCountryDataObject);
        borderCountryDataObjects = borderCountryDataObjects.flat();
      }

      // Populate bordering countries:
      // For certain countries, it sounds nicer to add 'the' to its link title, so this is done also.
      for (let borderCountry of borderCountryDataObjects) {
        const countriesThatSoundBetterWithTheBeforeName = [
          "caribbean-netherlands",
          "falkland-islands",
          "faroe-islands",
          "cocos-(keeling)-islands",
          "cayman-islands",
          "cook-islands",
          "solomon-islands",
          "turks-and-caicos-islands",
          "isle-of-man",
          "united-kingdom",
          "netherlands",
          "bahamas",
          "republic-of-the-congo",
          "dr-congo",
          "british-indian-ocean-territory",
          "british-virgin-islands",
          "central-african-republic",
          "french-southern-and-antarctic-lands",
          "marshall-islands",
          "maldives",
          "northern-mariana-islands",
          "pitcairn-islands",
          "united-states",
          "united-states-minor-outlying-islands",
          "united-states-virgin-islands",
          "åland-islands",
        ];
        let linkTitle = borderCountry.name.common;
        if (
          countriesThatSoundBetterWithTheBeforeName.includes(
            borderCountry.name.common.toLowerCase().replace(/\s/g, "-")
          )
        )
          if (borderCountry.name.common === "DR Congo") {
            linkTitle = "the " + borderCountry.name.official;
          } else {
            linkTitle = "the " + borderCountry.name.common;
          }
        borderCountriesList.innerHTML +=
          "<a class='border-country-link' href='./" +
          borderCountry.name.common.toLowerCase().replace(/\s/g, "-") +
          ".html' title='Learn about " +
          linkTitle +
          "!'>" +
          borderCountry.name.common +
          "</a>";
      }
    } else {
      borderCountriesList.innerHTML += "<p id='no-borders'>None</p>";
    }
  }

  // Populate country page:
  countryDataContainer.innerHTML +=
    "<div id='country-page-headers-container'>" +
    countryPageHeader +
    nativeNames +
    "</div>" +
    "<div id='country-body-container'>" +
    "<div id='flag-info-container'>" +
    "<img id='" +
    country.name.common.toLowerCase().replace(/\s/g, "-") +
    "-flag-country-page' src=" +
    country.flags.png +
    " alt='" +
    country.flags.alt +
    "'>" +
    "<div id='country-info-container'>" +
    "<div id='country-facts-container'>" +
    region +
    subregion +
    continents +
    capital +
    "<p>Population: <span>" +
    country.population.toLocaleString() +
    "</span></p>" +
    demonyms +
    languages +
    currencies +
    timezones +
    drivingSide +
    "<a href=" +
    googleMapsLink +
    ' target="_blank">View on Google Maps</a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div id='border-countries-container'><header>Border Countries: </header>" +
    "<div id='border-countries-list'></div>" +
    "</div>" +
    "</div>";
  getBorders();

  // Make the position of site header not sticky, as it is on the homepage:
  const countryPageDOM = countryDataContainer.parentElement;
  const siteHeaderCountryPages = countryPageDOM.children[0];
  if (countryPageDOM.children[1].id === "country-page-main-container") {
    siteHeaderCountryPages.style.position = "unset";
  }

  // Populate area for quiz link:
  const quizLinkArea = document.getElementById("quiz-link-container");
  quizLinkArea.innerHTML +=
    "<a href='../quiz.html'>How well do you know your country trivia? Take the quiz!</a>";
}
getCountry();
