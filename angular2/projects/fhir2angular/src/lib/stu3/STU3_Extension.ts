import { STU3_Address } from './STU3_Address'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Meta } from './STU3_Meta'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SampledData } from './STU3_SampledData'
import { STU3_Signature } from './STU3_Signature'
import { STU3_Timing } from './STU3_Timing'

export class STU3_Extension      extends STU3_Element
{

   static def : string = 'Extension';
   valueBase64Binary : string ;
   valueBoolean : boolean ;
   valueCode : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueDecimal : string ;
   valueId : string ;
   valueInstant : string ;
   valueInteger : string ;
   valueMarkdown : string ;
   valueOid : string ;
   valuePositiveInt : string ;
   valueString : string ;
   valueTime : string ;
   valueUnsignedInt : string ;
   valueUri : string ;
   valueAddress : STU3_Address ;
   valueAge : string ;
   valueAnnotation : STU3_Annotation ;
   valueAttachment : STU3_Attachment ;
   valueCodeableConcept : STU3_CodeableConcept ;
   valueCoding : STU3_Coding ;
   valueContactPoint : STU3_ContactPoint ;
   valueCount : string ;
   valueDistance : string ;
   valueDuration : string ;
   valueHumanName : STU3_HumanName ;
   valueIdentifier : STU3_Identifier ;
   valueMoney : string ;
   valuePeriod : STU3_Period ;
   valueQuantity : STU3_Quantity ;
   valueRange : STU3_Range ;
   valueRatio : STU3_Ratio ;
   valueReference : STU3_Reference ;
   valueSampledData : STU3_SampledData ;
   valueSignature : STU3_Signature ;
   valueTiming : STU3_Timing ;
   valueMeta : STU3_Meta ;
   url : string ;
}
