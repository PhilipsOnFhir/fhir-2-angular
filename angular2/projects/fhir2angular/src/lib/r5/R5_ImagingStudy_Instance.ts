import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ImagingStudy_Instance      extends R5_BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   uid : string ;
   sopClass : R5_Coding ;
   number : string ;
   title : string ;
}
