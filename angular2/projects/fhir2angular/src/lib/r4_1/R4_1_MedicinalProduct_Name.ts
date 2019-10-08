import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProduct_CountryLanguage } from './R4_1_MedicinalProduct_CountryLanguage'
import { R4_1_MedicinalProduct_NamePart } from './R4_1_MedicinalProduct_NamePart'

export class R4_1_MedicinalProduct_Name      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProduct_Name';
   productName : string ;
   namePart : R4_1_MedicinalProduct_NamePart [];
   countryLanguage : R4_1_MedicinalProduct_CountryLanguage [];
}
