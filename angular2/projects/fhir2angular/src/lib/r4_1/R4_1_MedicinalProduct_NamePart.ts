import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicinalProduct_NamePart      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProduct_NamePart';
   part : string ;
   type : R4_1_Coding ;
}
