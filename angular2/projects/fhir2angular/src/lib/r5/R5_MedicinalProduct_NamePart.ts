import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicinalProduct_NamePart      extends R5_BackboneElement
{

   static def : string = 'MedicinalProduct_NamePart';
   part : string ;
   type : R5_Coding ;
}
