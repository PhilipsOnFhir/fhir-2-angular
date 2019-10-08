import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class MedicinalProductDefinition_NamePart      extends BackboneElement
{

   static def : string = 'MedicinalProductDefinition_NamePart';
   part : string ;
   type : Coding ;
}
