import {BASE_URL} from './base'

export const getSelecteds = async () => {
  const response = await fetch(`${BASE_URL}/escorts/escorts_selected`)
  const data = await response.json()
  return data
}

export const sendFormData = async data => {
  data.category_ids = data.category_ids.map(e => e.value)
  data.activity_ids = data.activity_ids.map(e => e.value)
  data.location_ids = data.location_ids.map(e => e.value)
  const response = await fetch(`${BASE_URL}/escorts/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response
}

export const setCounter = async id => {
  const url = `${BASE_URL}/escorts/counter?id=${id}`;
  await fetch(url);
};