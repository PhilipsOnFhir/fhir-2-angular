import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ConsentDataMeaningEnum } from './STU3_ConsentDataMeaningEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Consent_Data      extends STU3_BackboneElement
{

   static def : string = 'Consent_Data';
   meaning : STU3_ConsentDataMeaningEnum ;
   reference : STU3_Reference ;
}
