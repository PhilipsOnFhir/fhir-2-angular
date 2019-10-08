import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProduct_CountryLanguage } from './R4_MedicinalProduct_CountryLanguage'
import { R4_MedicinalProduct_NamePart } from './R4_MedicinalProduct_NamePart'

export class R4_MedicinalProduct_Name      extends R4_BackboneElement
{

   static def : string = 'MedicinalProduct_Name';
   productName : string ;
   namePart : R4_MedicinalProduct_NamePart [];
   countryLanguage : R4_MedicinalProduct_CountryLanguage [];
}
