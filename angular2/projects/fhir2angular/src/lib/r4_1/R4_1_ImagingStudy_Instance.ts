import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ImagingStudy_Instance      extends R4_1_BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   uid : string ;
   sopClass : R4_1_Coding ;
   number : string ;
   title : string ;
}
