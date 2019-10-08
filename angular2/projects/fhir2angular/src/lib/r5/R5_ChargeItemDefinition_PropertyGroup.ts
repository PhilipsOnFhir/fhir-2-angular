import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ChargeItemDefinition_Applicability } from './R5_ChargeItemDefinition_Applicability'
import { R5_ChargeItemDefinition_PriceComponent } from './R5_ChargeItemDefinition_PriceComponent'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ChargeItemDefinition_PropertyGroup      extends R5_BackboneElement
{

   static def : string = 'ChargeItemDefinition_PropertyGroup';
   applicability : R5_ChargeItemDefinition_Applicability [];
   priceComponent : R5_ChargeItemDefinition_PriceComponent [];
}
