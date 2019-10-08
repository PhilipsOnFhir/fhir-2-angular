import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ConsentDataMeaningEnum } from './R5_ConsentDataMeaningEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Consent_Data      extends R5_BackboneElement
{

   static def : string = 'Consent_Data';
   meaning : R5_ConsentDataMeaningEnum ;
   reference : R5_Reference ;
}
