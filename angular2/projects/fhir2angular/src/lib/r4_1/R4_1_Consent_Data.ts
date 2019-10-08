import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ConsentDataMeaningEnum } from './R4_1_ConsentDataMeaningEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Consent_Data      extends R4_1_BackboneElement
{

   static def : string = 'Consent_Data';
   meaning : R4_1_ConsentDataMeaningEnum ;
   reference : R4_1_Reference ;
}
