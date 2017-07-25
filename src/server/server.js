/**
 * Created by Eric on 2017/7/25.
 */
import axios from 'axios'

// let base = 'http://192.168.**:8080';

export const getProductList = params => { return axios.get(`${base}/production`,{params:params})};

export const getProductInfo = params => { return axios.get(`${base}/production/${params}`)};

export const getProductImg = params => { return axios.get(`${base}/production/imgs/${params}`)};
