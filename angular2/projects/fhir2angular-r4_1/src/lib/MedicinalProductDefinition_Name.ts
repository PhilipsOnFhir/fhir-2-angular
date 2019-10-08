import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { MedicinalProductDefinition_CountryLanguage } from './MedicinalProductDefinition_CountryLanguage'
import { MedicinalProductDefinition_NamePart } from './MedicinalProductDefinition_NamePart'

export class MedicinalProductDefinition_Name      extends BackboneElement
{

   static def : string = 'MedicinalProductDefinition_Name';
   productName : string ;
   type : Coding ;
   namePart : MedicinalProductDefinition_NamePart [];
   countryLanguage : MedicinalProductDefinition_CountryLanguage [];
}
