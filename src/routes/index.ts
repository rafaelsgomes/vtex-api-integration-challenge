import axios from 'axios';
import { createObjectCsvWriter } from 'csv-writer';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Router } from 'express';

dayjs.extend(utc);
const router = Router();

const APP_KEY = ''; // preencha com as devidas informações
const APP_TOKEN = ''; // preencha com as devidas informações
const ORDERID = ''; // preencha com as devidas informações
const ACCOUNTNAME = ''; // preencha com as devidas informações
const ENVIRONMENTLINK = ''; // preencha com as devidas informações

router.get('/', async (request, response) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppToken': `${APP_TOKEN}`,
      'X-VTEX-API-AppKey': `${APP_KEY}`,
    },
  };

  await axios
    .get(
      `https://${ACCOUNTNAME}.${ENVIRONMENTLINK}.com/api/oms/pvt/orders/${ORDERID}`,
      options,
    )
    .then(async response => {
      const { data } = response;
      const csvData = [];
      csvData[0] = {
        orderId: data.orderId,
        clientId: data.clientProfileData.id,
        creationDate: data.creationDate,
        paymentNames:
          data.paymentData.transactions[0].payments[0].paymentSystemName,
        document: data.clientProfileData.document,
        lastChange: data.lastChange,
        totalItems: data.totals[0].value,
        Discounts: data.totals[1].value,
        value: data.value,
      };
      const cvsWriter = createObjectCsvWriter({
        path: `./tmp/ORDERS_${dayjs().year()}-${
          dayjs().month() + 1
        }-${dayjs().date()}.csv`,
        header: [
          { id: 'orderId', title: 'IdPedido' },
          { id: 'clientId', title: 'ClienteId' },
          { id: 'creationDate', title: 'Dt_pedido' },
          { id: 'paymentNames', title: 'Tipo_pagamento' },
          { id: 'document', title: 'cpf' },
          { id: 'lastChange', title: 'Dt_modificacao' },
          { id: 'totalItems', title: 'Qtd_itens' },
          { id: 'Discounts', title: 'Desconto' },
          { id: 'value', title: 'Valor' },
        ],
      });

      await cvsWriter.writeRecords(csvData).then(() => {
        console.log('...Done');
      });
    })
    .catch(err => console.log(err));

  return response.status(201).send();
});

export { router };
