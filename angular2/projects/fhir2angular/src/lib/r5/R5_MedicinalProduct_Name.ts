import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProduct_CountryLanguage } from './R5_MedicinalProduct_CountryLanguage'
import { R5_MedicinalProduct_NamePart } from './R5_MedicinalProduct_NamePart'

export class R5_MedicinalProduct_Name      extends R5_BackboneElement
{

   static def : string = 'MedicinalProduct_Name';
   productName : string ;
   namePart : R5_MedicinalProduct_NamePart [];
   countryLanguage : R5_MedicinalProduct_CountryLanguage [];
}
