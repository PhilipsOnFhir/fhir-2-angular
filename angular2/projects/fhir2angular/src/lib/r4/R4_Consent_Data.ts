import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConsentDataMeaningEnum } from './R4_ConsentDataMeaningEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Consent_Data      extends R4_BackboneElement
{

   static def : string = 'Consent_Data';
   meaning : R4_ConsentDataMeaningEnum ;
   reference : R4_Reference ;
}
