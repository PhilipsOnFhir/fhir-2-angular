import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_HumanName } from './DSTU2_HumanName'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Meta } from './DSTU2_Meta'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SampledData } from './DSTU2_SampledData'
import { DSTU2_Signature } from './DSTU2_Signature'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_Extension      extends DSTU2_Element
{

   static def : string = 'Extension';
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
   valueBase64Binary : string ;
   valueInstant : string ;
   valueString : string ;
   valueUri : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueTime : string ;
   valueCode : string ;
   valueOid : string ;
   valueUuid : string ;
   valueId : string ;
   valueUnsignedInt : string ;
   valuePositiveInt : string ;
   valueMarkdown : string ;
   valueAnnotation : DSTU2_Annotation ;
   valueAttachment : DSTU2_Attachment ;
   valueIdentifier : DSTU2_Identifier ;
   valueCodeableConcept : DSTU2_CodeableConcept ;
   valueCoding : DSTU2_Coding ;
   valueQuantity : DSTU2_Quantity ;
   valueRange : DSTU2_Range ;
   valuePeriod : DSTU2_Period ;
   valueRatio : DSTU2_Ratio ;
   valueReference : DSTU2_Reference ;
   valueSampledData : DSTU2_SampledData ;
   valueSignature : DSTU2_Signature ;
   valueHumanName : DSTU2_HumanName ;
   valueAddress : DSTU2_Address ;
   valueContactPoint : DSTU2_ContactPoint ;
   valueTiming : DSTU2_Timing ;
   valueMeta : DSTU2_Meta ;
   url : string ;
}
