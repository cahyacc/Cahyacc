require('./admin')
const fs = require('fs');
const axios = require('axios');
const FormData = require("form-data");
const { sleep } = require("./myfunc");
const blnc = require("../db/balance");
const topupPath = "./db/topup/";
let balanceDB = JSON.parse(fs.readFileSync("./db/balance.json"));
async function makeOrder(data_topup, smm, randomRef) {
	if (fs.existsSync(.'/db/topup/' + m.sender.split("@")[0] + ".json")) {
    let data_topup = JSON.parse(fs.readFileSync('./db/topup/' + m.sender.split("@")[0] + ".json"));
  const datai = new FormData();
  datai.append('action', 'order');
  datai.append('ref_id', randomRef);
  datai.append('buyer_sku_code', data_topup.ID);
  datai.append('customer_no', data_topup.data.nomer);
  datai.append('username', smm.username);
  datai.append('token', smm.token);

  try {
    const res = await axios.post('https://panell.sosmed-booster.my.id/bppom.php', datai);
    console.log(res.data.data);
    let status = res.data.data.status;
    let sn = res.data.data.sn;
    const refId = res.data.data.ref_id;

    while (status !== 'Sukses') {
      await sleep(3000);
      const response = await axios.post('https://panell.sosmed-booster.my.id/bppom.php', datai);
      console.log(response.data.data);
      status = response.data.data.status;
      sn = response.data.data.sn;

      if (status == "Gagal") {
        relay(`*「 TRANSAKSI GAGAL 」*\n
          *ID Order:* ${res.data.data.ref_id}
          *Tujuan:* ${res.data.data.customer_no}
          *Note:* *${response.data.data.message}*
        `);

        if (fs.existsSync(topupPath + m.sender.split("@")[0] + ".json")) {
          fs.unlinkSync(topupPath + m.sender.split("@")[0] + ".json"); 
        }

        return;
      } else if (status == "Sukses") {
        blnc.lessBalance(data_topup.number, Number(data_topup.data.price), balanceDB);
        console.log(res.data.data);
        relay(`*「 SUCCESS. BOSSKU 」*
          *›› Ref ID :* ${refId}
          *›› Status :* ${status}
          *›› Item :* ${data_topup.data.product_name}
          *›› Target:* ${data_topup.data.brand === "MOBILE LEGENDS" ? `*Nick:* ${data_topup.data.stalk.nickname}\n*›› ID:* ${data_topup.data.stalk.id}(${data_topup.data.stalk.zoneId})` : (data_topup.data.brand === "FREE FIRE" ? `${data_topup.data.stalk.nickname}` : `${data_topup.data.nomer}`)}
          *›› Pesan :* ${response.data.data.message} 
          *›› Harga :* Rp${toRupiah(data_topup.data.price)}
          *›› Tanggal :* ${tanggal}
          *›› Jam :* ${jam}

          ══════✪〘 *SN* 〙✪══════
          ${sn.split('/').join('\n')}
          ✪═════════════════✪`
        );

        if (fs.existsSync(topupPath + m.sender.split("@")[0] + ".json")) {
          fs.unlinkSync(topupPath + m.sender.split("@")[0] + ".json"); 
        }

        return;
      } 
    }
  } catch (error) {
    if (error.response) {
      console.log(error);
      relay(`*「 TRANSAKSI GAGAL 」*\n\n*${error.response.data.data.message}*`);

      if (fs.existsSync(topupPath + m.sender.split("@")[0] +".json")) {
        fs.unlinkSync(topupPath + m.sender.split("@")[0] + ".json"); 
      }

      return;
    } else {
      console.log(error);
      relay(`*「 TERJADI KESALAHAN 」*\n\n*${error}*`);

      if (fs.existsSync(topupPath + m.sender.split("@")[0] + ".json")) {
        fs.unlinkSync(topupPath + m.sender.split("@")[0] + ".json"); 
      }

      return;
    }
  }
}
}

module.exports = {
  makeOrder,
};