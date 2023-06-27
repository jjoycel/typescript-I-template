// A função **buscarCarrosPorMarca** recebe um array de carros e uma marca. Ela devolve os carros desta marca ou o array inteiro, caso a marca não seja passada.

// 1) Faça corretamente a tipagem do arquivo **frota.ts**, que contém os dados dos carros (marca, modelo, ano)

// 2) Importe os dados desse arquivo para o index.ts e faça a tipagem correta da função

// 3) Torne o parâmetro marca opcional

export type TCarro = {
  marca: string
  modelo: string
  ano: Number
}

export const frota: TCarro [] = [
  {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2019
  }, {
    marca: 'Chevrolet',
    modelo: 'Celta',
    ano: 2008
  }, {
    marca: 'Chevrolet',
    modelo: 'Vectra',
    ano: 2004
  }, {
    marca: 'Ford',
    modelo: 'EcoSport',
    ano: 2012
  }, {
    marca: 'Ford',
    modelo: 'Ka',
    ano: 2015
  }, {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: 2018
  }, {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020
  }, {
    marca: 'Fiat',
    modelo: 'Toro',
    ano: 2022
  }, {
    marca: 'Fiat',
    modelo: 'Punto',
    ano: 2017
  }, {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021
  }, {
    marca: 'Toyota',
    modelo: 'Etios',
    ano: 2020
  }, {
    marca: 'Toyota',
    modelo: 'Yaris',
    ano: 2019
  }]