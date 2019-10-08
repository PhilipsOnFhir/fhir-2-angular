import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ImagingStudy_Instance      extends R4_BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   uid : string ;
   sopClass : R4_Coding ;
   number : string ;
   title : string ;
}
