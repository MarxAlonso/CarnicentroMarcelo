import  lomofino  from '../../../assets/carnes/lomofino.webp';
import  bife from '../../../assets/carnes/bife.webp';
import  carnemolidaespecial from '../../../assets/carnes/carnemolidaespecial.webp';
import  osobuco from '../../../assets/carnes/osobuco.webp';
import  asadotira from '../../../assets/carnes/asadotira.webp';
import  cuadrildecadera from '../../../assets/carnes/cuadrildecadera.webp';
import  tapadelomo from '../../../assets/carnes/tapadelomo.webp';
import boladelomo from '../../../assets/carnes/boladelomo.webp';
import corazondepaleta from '../../../assets/carnes/corazondepaleta.webp';
import asadodepejerrey from '../../../assets/carnes/asadodepejerrey.webp';
import asadocuadrado from '../../../assets/carnes/asadocuadrado.webp';
import guisodepaleta from '../../../assets/carnes/guisodepaleta.webp';
import churrascoredondo from '../../../assets/carnes/churrascoredondo.webp';
import aguja from '../../../assets/carnes/aguja.webp';
import malaya from '../../../assets/carnes/malaya.webp';
import huachalomo from '../../../assets/carnes/huachalomo.webp';
import cordondelomo from '../../../assets/carnes/cordondelomo.webp';
import entrana from '../../../assets/carnes/entrana.webp';
import sancochadopecho from '../../../assets/carnes/sancochadopecho.webp';
import falda from '../../../assets/carnes/falda.webp';
import costillas from '../../../assets/carnes/costillas.webp';
import osobucodebrazo from '../../../assets/carnes/osobucodebrazo.webp';
import carnemolidaextraespecial from '../../../assets/carnes/carnemolidaextraespecial.webp';


export const productosRes = [
    // BISTECKS
    {
        id: 1,
        nombre: 'Cuadril de cadera',
        precio: 40,
        categoria: 'Bistecks',
        descripcion: 'Corte premium de la cadera, ideal para bistecks jugosos y tiernos. Perfecto para la parrilla.',
        imagen: cuadrildecadera,
    },
    {
        id: 2,
        nombre: 'Tapa de Lomo',
        precio: 39,
        categoria: 'Bistecks',
        descripcion: 'Corte magro y suave, excelente para preparaciones a la plancha o parrilla.',
        imagen: tapadelomo,
    },
    {
        id: 3,
        nombre: 'Bola de Lomo',
        precio: 37,
        categoria: 'Bistecks',
        descripcion: 'Corte tierno y versátil, ideal para milanesas, bistecks o preparaciones al horno.',
        imagen: boladelomo,
    },
    {
        id: 4,
        nombre: 'Corazón de Paleta',
        precio: 36,
        categoria: 'Bistecks',
        descripcion: 'Corte magro de la paleta, perfecto para bistecks y preparaciones rápidas.',
        imagen: corazondepaleta,
    },
    {
        id: 5,
        nombre: 'Biffe',
        precio: 42,
        categoria: 'Bistecks',
        descripcion: 'Corte premium con excelente marmoleo, ideal para parrilla y preparaciones gourmet.',
        imagen: bife,
    },
    {
        id: 6,
        nombre: 'Lomo Fino',
        precio: 64,
        categoria: 'Bistecks',
        descripcion: 'El corte más tierno y premium, perfecto para medallones y preparaciones especiales.',
        imagen: lomofino,
    },

    // ASADOS
    {
        id: 7,
        nombre: 'Asado de Pejerrey',
        precio: 35,
        categoria: 'Asados',
        descripcion: 'Corte tradicional para asados, con hueso que aporta sabor y jugosidad.',
        imagen: asadodepejerrey,
    },
    {
        id: 8,
        nombre: 'Asado Cuadrado',
        precio: 32,
        categoria: 'Asados',
        descripcion: 'Corte clásico para asados familiares, ideal para cocción lenta y parrilla.',
        imagen: asadocuadrado,
    },

    // GUISOS
    {
        id: 9,
        nombre: 'Guiso de Paleta',
        precio: 30,
        categoria: 'Guisos',
        descripcion: 'Corte ideal para guisos y estofados, se vuelve muy tierno con cocción lenta.',
        imagen: guisodepaleta,
    },
    {
        id: 10,
        nombre: 'Churrasco Redondo',
        precio: 32,
        categoria: 'Guisos',
        descripcion: 'Corte versátil, perfecto para guisos, estofados y preparaciones al horno.',
        imagen: churrascoredondo,
    },
    {
        id: 11,
        nombre: 'Aguja',
        precio: 29,
        categoria: 'Guisos',
        descripcion: 'Corte económico y sabroso, excelente para guisos y preparaciones de cocción lenta.',
        imagen: aguja,
    },
    {
        id: 12,
        nombre: 'Malaya',
        precio: 28,
        categoria: 'Guisos',
        descripcion: 'Corte tradicional para guisos, aporta mucho sabor y se deshace con la cocción.',
        imagen: malaya,
    },
    {
        id: 13,
        nombre: 'Osobuco de pierna',
        precio: 26,
        categoria: 'Guisos',
        descripcion: 'Corte con hueso y tuétano, perfecto para guisos y caldos nutritivos.',
        imagen: osobuco,
    },
    {
        id: 14,
        nombre: 'Tira de Asado',
        precio: 28,
        categoria: 'Guisos',
        descripcion: 'Corte con costillas, ideal para guisos y preparaciones que requieren mucho sabor.',
        imagen: asadotira,
    },
    {
        id: 15,
        nombre: 'Huachalomo',
        precio: 32,
        categoria: 'Guisos',
        descripcion: 'Corte jugoso y sabroso, perfecto para guisos y estofados tradicionales.',
        imagen: huachalomo,
    },
    {
        id: 16,
        nombre: 'Cordoncito de Lomo',
        precio: 32,
        categoria: 'Guisos',
        descripcion: 'Corte tierno del lomo, excelente para guisos gourmet y preparaciones especiales.',
        imagen: cordondelomo,
    },
    {
        id: 17,
        nombre: 'Entraña',
        precio: 30,
        categoria: 'Guisos',
        descripcion: 'Corte con textura única, ideal para guisos y preparaciones de cocción lenta.',
        imagen: entrana,
    },

    // SANCHOCHADOS
    {
        id: 18,
        nombre: 'Pecho',
        precio: 22,
        categoria: 'Sanchochados',
        descripcion: 'Corte tradicional para sancochados, aporta mucho sabor al caldo y se vuelve muy tierno.',
        imagen: sancochadopecho,
    },
    {
        id: 19,
        nombre: 'Falda',
        precio: 24,
        categoria: 'Sanchochados',
        descripcion: 'Corte ideal para sancochados y caldos, con excelente sabor y textura.',
        imagen: falda,
    },
    {
        id: 20,
        nombre: 'Costilla',
        precio: 24,
        categoria: 'Sanchochados',
        descripcion: 'Costillas perfectas para sancochados, aportan sabor intenso y sustancia al caldo.',
        imagen: costillas,
    },
    {
        id: 21,
        nombre: 'Osobuco de brazo',
        precio: 22,
        categoria: 'Sanchochados',
        descripcion: 'Corte con hueso y tuétano del brazo, excelente para sancochados nutritivos.',
        imagen: osobucodebrazo,
    },

    // CARNE MOLIDA
    {
        id: 22,
        nombre: 'Carne molida Especial',
        precio: 28,
        categoria: 'Carne molida',
        descripcion: 'Carne molida de primera calidad, ideal para hamburguesas, albóndigas y guisos.',
        imagen: carnemolidaespecial,
    },
    {
        id: 23,
        nombre: 'Carne molida Extraespecial',
        precio: 30,
        categoria: 'Carne molida',
        descripcion: 'Carne molida premium con menor contenido graso, perfecta para preparaciones gourmet.',
        imagen: carnemolidaextraespecial,
    },
];
